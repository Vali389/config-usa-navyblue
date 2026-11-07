import os
from PIL import Image, ImageDraw, ImageFilter

brain = r'C:\Users\meera\.gemini\antigravity\brain\0d9dba0b-e2fc-44fe-8a96-97ef16865dce'
logo_clean_path = os.path.join(brain, 'scratch', 'logo_configusa_clean.png')
public_assets = r'd:\3rd-website\public\assets'

if not os.path.exists(logo_clean_path):
    print('Logo clean not found, generating...')
    raw_logo = Image.open(os.path.join(public_assets, 'configusa-logo-official.png')).convert('RGBA')
    w, h = raw_logo.size
    for x in range(int(w * 0.37), w):
        for y in range(int(h * 0.68), h):
            raw_logo.putpixel((x, y), (0, 0, 0, 0))
    bbox = raw_logo.getbbox()
    logo_clean = raw_logo.crop(bbox)
    os.makedirs(os.path.join(brain, 'scratch'), exist_ok=True)
    logo_clean.save(logo_clean_path)
else:
    logo_clean = Image.open(logo_clean_path).convert('RGBA')

print('Clean logo loaded:', logo_clean.size)

# =========================================================================
# 1. BRAND HOMEPAGE HERO: hero-corporate-bright.jpg
# Mount official 3D ConfigUSA logo onto the architectural oak boardroom wall
# =========================================================================
corp_path = os.path.join(public_assets, 'hero-corporate-bright.jpg')
corp = Image.open(corp_path)

target_w = 260
aspect = logo_clean.width / logo_clean.height
target_h = int(target_w / aspect)
logo_corp = logo_clean.resize((target_w, target_h), Image.Resampling.LANCZOS)

# 3D architectural shadow
shadow_corp = Image.new('RGBA', logo_corp.size, (0, 0, 0, 0))
for x in range(logo_corp.width):
    for y in range(logo_corp.height):
        r, g, b, a = logo_corp.getpixel((x, y))
        if a > 30:
            shadow_corp.putpixel((x, y), (25, 20, 15, int(a * 0.45)))
shadow_corp = shadow_corp.filter(ImageFilter.GaussianBlur(1.8))

pos_corp_x = 1030
pos_corp_y = 65

corp.paste(shadow_corp, (pos_corp_x + 2, pos_corp_y + 3), shadow_corp)
corp.paste(logo_corp, (pos_corp_x, pos_corp_y), logo_corp)
corp.save(corp_path, quality=96)
print('Successfully branded hero-corporate-bright.jpg')

# =========================================================================
# 2. BRAND CONTACT PAGE: hero-contact-bright.jpg
# Replace "CORP GLOBAL" on the marble reception desk with ConfigUSA logo
# =========================================================================
contact_path = os.path.join(public_assets, 'hero-contact-bright.jpg')
contact = Image.open(contact_path)

# Seamless marble patch covering CORP GLOBAL completely
clean_marble = contact.crop((655, 465, 775, 535))
mask_contact = Image.new('L', clean_marble.size, 0)
draw_contact = ImageDraw.Draw(mask_contact)
draw_contact.polygon([(6, 2), (116, 12), (116, 68), (6, 68)], fill=255)
mask_contact = mask_contact.filter(ImageFilter.GaussianBlur(2))
contact.paste(clean_marble, (775, 465), mask_contact)

# ConfigUSA logo with perspective skew
target_h_contact = 36
aspect_contact = logo_clean.width / logo_clean.height
target_w_contact = int(target_h_contact * aspect_contact)
logo_contact_res = logo_clean.resize((target_w_contact, target_h_contact), Image.Resampling.LANCZOS)

m = 0.10
xshift = abs(m) * target_h_contact
new_w = target_w_contact + int(round(xshift))
logo_contact_persp = logo_contact_res.transform(
    (new_w, target_h_contact),
    Image.AFFINE,
    (1, m, -xshift if m > 0 else 0, 0, 1, 0),
    Image.Resampling.BICUBIC
)

# 3D shadow for desk
shadow_contact = Image.new('RGBA', logo_contact_persp.size, (0, 0, 0, 0))
for x in range(logo_contact_persp.width):
    for y in range(logo_contact_persp.height):
        r, g, b, a = logo_contact_persp.getpixel((x, y))
        if a > 40:
            shadow_contact.putpixel((x, y), (35, 30, 25, int(a * 0.45)))
shadow_contact = shadow_contact.filter(ImageFilter.GaussianBlur(1))

contact.paste(shadow_contact, (794, 483), shadow_contact)
contact.paste(logo_contact_persp, (793, 482), logo_contact_persp)
contact.save(contact_path, quality=96)
print('Successfully branded hero-contact-bright.jpg')

# =========================================================================
# 3. BRAND ABOUT PAGE: hero-about-bright.jpg
# Replace "GLOBAL" text on smart-board HUD with "CONFIGUSA" & mount logo
# =========================================================================
about_path = os.path.join(public_assets, 'hero-about-bright.jpg')
about = Image.open(about_path)

# Seamless glass patch over "GLOBAL MARKET EXPANSION STRATEGY 2024"
# Sample glass background from clean adjacent region x: 1000..1200, y: 210..245
glass_sample = about.crop((1000, 210, 1260, 245))
mask_glass = Image.new('L', glass_sample.size, 230).filter(ImageFilter.GaussianBlur(3))
about.paste(glass_sample, (1030, 158), mask_glass)

# Create glowing HUD text "CONFIGUSA · GLOBAL DELIVERY NETWORK"
hud_overlay = Image.new('RGBA', (340, 40), (0, 0, 0, 0))
hud_draw = ImageDraw.Draw(hud_overlay)

# Add ConfigUSA logo in luminous cyan HUD style
logo_about_hud = Image.new('RGBA', logo_clean.size, (0, 0, 0, 0))
for x in range(logo_clean.width):
    for y in range(logo_clean.height):
        r, g, b, a = logo_clean.getpixel((x, y))
        if a > 40:
            logo_about_hud.putpixel((x, y), (235, 250, 255, int(a * 0.95)))

target_h_about = 22
aspect_about = logo_about_hud.width / logo_about_hud.height
target_w_about = int(target_h_about * aspect_about)
logo_about_res = logo_about_hud.resize((target_w_about, target_h_about), Image.Resampling.LANCZOS)

glow_about = Image.new('RGBA', logo_about_res.size, (0, 0, 0, 0))
for x in range(logo_about_res.width):
    for y in range(logo_about_res.height):
        r, g, b, a = logo_about_res.getpixel((x, y))
        if a > 30:
            glow_about.putpixel((x, y), (80, 215, 255, int(a * 0.75)))
glow_about = glow_about.filter(ImageFilter.GaussianBlur(2))

about.paste(glow_about, (1040, 162), glow_about)
about.paste(logo_about_res, (1040, 162), logo_about_res)

# Also mount official ConfigUSA logo on the wood architectural pillar at left of screen (x: 880, y: 130)
target_w_pillar = 140
target_h_pillar = int(target_w_pillar / aspect)
logo_pillar = logo_clean.resize((target_w_pillar, target_h_pillar), Image.Resampling.LANCZOS)
shadow_pillar = Image.new('RGBA', logo_pillar.size, (0, 0, 0, 0))
for x in range(logo_pillar.width):
    for y in range(logo_pillar.height):
        r, g, b, a = logo_pillar.getpixel((x, y))
        if a > 30:
            shadow_pillar.putpixel((x, y), (20, 18, 15, int(a * 0.40)))
shadow_pillar = shadow_pillar.filter(ImageFilter.GaussianBlur(1.5))

about.paste(shadow_pillar, (882, 132), shadow_pillar)
about.paste(logo_pillar, (880, 130), logo_pillar)

about.save(about_path, quality=96)
print('Successfully branded hero-about-bright.jpg')

