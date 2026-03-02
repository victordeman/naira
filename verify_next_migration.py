import asyncio
import os
import subprocess
import time
from playwright.async_api import async_playwright

async def run():
    # Set environment variables for Next.js build/run
    env = os.environ.copy()
    env["NEXT_PUBLIC_SUPABASE_URL"] = "https://placeholder.supabase.co"
    env["NEXT_PUBLIC_SUPABASE_ANON_KEY"] = "placeholder"

    # Start the Next.js production server
    print("Starting Next.js server...")
    process = subprocess.Popen(
        ["npm", "run", "start"],
        env=env,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )

    # Wait for server to start
    time.sleep(10)

    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch()
            page = await browser.new_page()
            
            # Next.js default port is 3000
            url = "http://localhost:3000/"
            print(f"Connecting to {url}...")
            await page.goto(url)
            
            # Check title
            title = await page.title()
            print(f"Page title: {title}")
            assert "NAIRA" in title
            
            # Check for Hero section
            hero = await page.query_selector("#hero")
            print(f"Hero section found: {hero is not None}")
            assert hero is not None
            
            # Check for Vision section
            vision = await page.query_selector("#vision")
            print(f"Vision section found: {vision is not None}")
            assert vision is not None
            
            # Check for Partner form
            partner_form = await page.query_selector("form[action*='formspree.io']")
            print(f"Partner form found: {partner_form is not None}")
            assert partner_form is not None
            
            # Take a screenshot
            await page.screenshot(path="screenshot_next.png", full_page=True)
            print("Screenshot saved to screenshot_next.png")
            
            await browser.close()
    finally:
        process.terminate()
        print("Server stopped.")

if __name__ == "__main__":
    asyncio.run(run())
