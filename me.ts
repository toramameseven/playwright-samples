import {chromium, firefox, webkit } from 'playwright';


// https://zenn.dev/t_kitamura/articles/4a92f28b450a1c
const browserTypes = [chromium, firefox, webkit];


const capt = async () => {
  for (const browserType of browserTypes) {
    // ブラウザの種類を設定する
    const browser = await browserType.launch();



    const context = await browser.newContext();
    const page = await context.newPage();

    // 設定しているURLにアクセスする
    await page.goto('https://www.whatismybrowser.com/');

    // スクリーンショットを取る。
    // この場合は実行ファイルと同じディレクトリに保存されます。
    await page.screenshot({path: `${browserType.name()}.png`});

    // ブラウザを閉じる
    await browser.close();
  }
};

capt();