from PIL import Image
import os, glob

brain = r"C:\Users\kksu1\.gemini\antigravity\brain\613c8804-f2af-4e97-993d-d6860896fba0"
dest = r"c:\Users\kksu1\Dev\2026_portfolio\public\images\projects"

# Process DDIP
ddip_src = os.path.join(brain, "ddip_demo_1280x800_1770920386992.png")
img = Image.open(ddip_src)
img = img.resize((1280, 800), Image.LANCZOS)
img.save(os.path.join(dest, "ddip.png"), "PNG")
size = os.path.getsize(os.path.join(dest, "ddip.png")) // 1024
print(f"ddip.png saved: {size}KB")
img.close()

# Process PrimeRing
pr_src = os.path.join(brain, "primering_final_1770920928788.png")
img = Image.open(pr_src)
img = img.resize((1280, 800), Image.LANCZOS)
img.save(os.path.join(dest, "prime-ring.png"), "PNG")
size = os.path.getsize(os.path.join(dest, "prime-ring.png")) // 1024
print(f"prime-ring.png saved: {size}KB")
img.close()

# Clean up duplicate screenshots
patterns = ["ddip_demo_*", "ddip_screenshot_*", "ddip_thumbnail_*", "ddip_project_*", "ddip_1770*",
            "primering_final_*"]
count = 0
for pattern in patterns:
    for f in glob.glob(os.path.join(brain, pattern)):
        os.remove(f)
        count += 1
print(f"Cleaned up {count} duplicate files")
