const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to the local website
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Wait a bit for all content to load
  await page.waitForTimeout(2000);
  
  // Generate PDF
  await page.pdf({
    path: 'susan-k-pearson-website.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    }
  });
  
  console.log('PDF generated successfully: susan-k-pearson-website.pdf');
  
  await browser.close();
})();
