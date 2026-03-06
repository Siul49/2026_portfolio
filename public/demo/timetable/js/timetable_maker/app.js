// Student 클래스를 import
import { Student } from './student.js';

let csvData = null; // CSV 데이터를 저장할 변수

// CSV 파일 업로드(input type="file") 이벤트 리스너 등록
document.getElementById("csvInput").addEventListener("change", function (e) {
    const file = e.target.files[0]; // 업로드된 파일 가져오기
    Papa.parse(file, { // PapaParse 라이브러리로 CSV 파일 파싱
        complete: function(results) {
            csvData = results.data; // 파싱된 데이터를 csvData에 저장
            alert("CSV 로딩 완료!"); // 사용자에게 알림
        }
    });
});

// "processBtn" 버튼 클릭 시 시간표 배정 및 결과 다운로드
document.getElementById("processBtn").addEventListener("click", function () {
    if (!csvData) { // CSV 데이터가 없으면
        alert("먼저 CSV 파일을 업로드하세요.");
        return;
    }

    // 시간표: 행(row), 요일: 열(col), 한 칸에 배정할 학생 수: 유닛(unit) 설정
    let row = /*Number(localStorage.getItem('row')) ||*/ 4;//시간
    let col = /*Number(localStorage.getItem('col')) ||*/ 3;//일
    let unit = /*Number(localStorage.getItem('unit')) ||*/18;//사람 per 1시간
    const students = []; // Student 객체들을 담을 배열
    const map = new Map(); // 중복 학생(개인번호) 방지를 위한 Map

    // CSV 데이터에서 학생 정보를 추출하여 Student 객체 생성
    for (const line of csvData) {
        const [name, personalNum, ...times] = line; // 이름, 개인번호, 가능한 시간대 분리
        if (!map.has(personalNum)) { // 중복 방지
            map.set(personalNum, true);
            students.push(new Student(name, personalNum, times, col, row));
        }
    }

    // 빈 시간표 2차원 배열 생성 (row x col)
    const timeTable = Array.from({ length: row }, () => Array(col).fill(""));

    // 시간표 각 칸에 학생 배정
    for (let i = 0; i < row; i++) { // 행(시간대) 순회
        for (let j = 0; j < col; j++) { // 열(요일 등) 순회
            // 가능한 시간 개수가 적은 학생부터 우선 배정
            students.sort((a, b) => a.selectCnt - b.selectCnt);

            const selected = []; // 이번 칸에 배정된 학생들의 개인번호 저장
            let cnt = 0; // 현재 배정된 학생 수

            // 학생 리스트를 순회하며 해당 칸에 배정
            for (let k = 0; k < students.length && cnt < unit; k++) {
                if (students[k].isPossible(i, j)) { // 해당 칸이 가능한 학생이라면
                    timeTable[i][j] += `${students[k].name}/${students[k].personalNum}, `;
                    selected.push(students[k].personalNum); // 배정된 학생 기록
                    cnt++;
                }
            }

            // 배정된 학생은 students 배열에서 제거 (중복 배정 방지)
            for (const id of selected) {
                const idx = students.findIndex(s => s.personalNum === id);
                if (idx !== -1) students.splice(idx, 1);
            }

            // 해당 칸에 학생이 배정되었으면, 남은 학생들의 해당 시간 가능 여부를 false로 변경
            if (timeTable[i][j] !== "") {
                for (const student of students) {
                    student.deleteTime(i, j);
                }
                // 마지막에 붙은 ", " 제거
                timeTable[i][j] = timeTable[i][j].replace(/, $/, "");
            }
        }
    }

    // 1. timeTable(2차원 배열)을 HTML 테이블 문자열로 변환
    function arrayToHtmlTable(arr) {
        const rowCount = arr.length;
        let html = ''; // 테이블 태그 없이 내용만 반환

        arr.forEach((row) => {
            html += `<tr style="height: ${100 / rowCount}%;">`;
            row.forEach(cell => {
                html += `<td>${cell}</td>`;
            });
            html += '</tr>';
        });

        return html;
    }

// 2. HTML 전체 문서로 감싸기
    function wrapHtml(bodyContent) {
        return `
            <!DOCTYPE html>
            <html lang="ko">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>시간표</title>
              <style>
                @font-face {
                  font-family: 'TAEBAEKfont';
                  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/TAEBAEKfont.woff2') format('woff2');
                  font-weight: normal;
                  font-style: normal;
                }
                body {
                  margin: 0;
                  min-height: 100svh;
                  font-family: 'TAEBAEKfont', sans-serif;
                  color: #10213a;
                  background:
                    radial-gradient(circle at top, rgba(255, 255, 255, 0.72), transparent 48%),
                    linear-gradient(180deg, #fff7eb 0%, #fee9ce 100%);
                }
                * {
                  box-sizing: border-box;
                }
                .page {
                  padding: clamp(16px, 3vw, 32px);
                }
                .shell {
                  width: min(1100px, 100%);
                  margin: 0 auto;
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                }
                .chip {
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  min-height: 48px;
                  padding: 12px 20px;
                  background: #fde295;
                  border: 4px solid #000;
                  border-radius: 999px;
                  box-shadow: 4px 4px 0 #000;
                }
                .card {
                  background: rgba(255, 255, 255, 0.96);
                  border: 4px solid #000;
                  border-radius: 28px;
                  box-shadow: 6px 6px 0 #000;
                  overflow: hidden;
                }
                .header {
                  padding: 16px 20px;
                  background: rgba(255, 255, 255, 0.96);
                  border-bottom: 4px solid #000;
                  font-size: clamp(18px, 2vw, 24px);
                }
                .table-wrap {
                  overflow: auto;
                  padding: 16px;
                }
                table {
                  width: 100%;
                  min-width: 720px;
                  table-layout: fixed;
                  border-collapse: collapse;
                  background: #fff;
                }
                td {
                  padding: 10px;
                  border: 2px solid #000;
                  vertical-align: top;
                  word-break: break-word;
                  line-height: 1.45;
                }
                @media (max-width: 640px) {
                  .page {
                    padding: 12px;
                  }
                  .table-wrap {
                    padding: 12px;
                  }
                }
              </style>
            </head>
            <body>
              <main class="page">
                <section class="shell">
                  <div class="chip">생성된 타임테이블</div>
                  <div class="card">
                    <div class="header">CSV 데이터를 기반으로 생성된 시간표 결과</div>
                    <div class="table-wrap">
                      <table>
                        <tbody>
                          ${bodyContent}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </main>
            </body>
            </html>
        `;
    }


    // 3. 변환 및 저장
    const htmlTableString = arrayToHtmlTable(timeTable);
    const fullHtml = wrapHtml(htmlTableString);
    const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8;" });
    saveAs(blob, "schedule.html");
});

