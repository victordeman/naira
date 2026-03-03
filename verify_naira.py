import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        # Go to the local dev server
        print("Connecting to http://localhost:3000/...")
        await page.goto("http://localhost:3000/")
        
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
        await page.screenshot(path="screenshot.png", full_page=True)
        print("Screenshot saved to screenshot.png")
        
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
