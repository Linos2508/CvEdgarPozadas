const PrincipalPage = require('../pageobjects/principal.page');

describe('Cv testing', () => {
    it('should open Facebook', async () => {
        await PrincipalPage.open();
        const Facebook = await PrincipalPage.FacebookLink;
        await Facebook.click();
        await expect(browser).toHaveUrl('https://www.facebook.com/edgar.pozadas/');
    });
    it('should open github', async () => {
        await PrincipalPage.open();
        const github = await PrincipalPage.githubLink;
        await github.click();
        await expect(browser).toHaveUrl('https://github.com/Linos2508');
    });
    it('should open LinkedIn', async () => {
        await PrincipalPage.open();
        const linkedIn = await PrincipalPage.linkedInLink;
        await expect(linkedIn).toHaveHref('https://www.linkedin.com/in/edgar-pozadas-5261b4187/')
        await linkedIn.click();
        await expect(browser).toHaveUrlContaining('https://www.linkedin.com');
    });
    it('should open CvPDF', async () => {
        await PrincipalPage.open();
        const PDF = await PrincipalPage.cvPDFLink;
        await expect(PDF).toBeClickable()
        await expect(PDF).toHaveHref('/static/media/cv_edgar.f6a0b0de.pdf')
    });
    it('Should change language', async () => {
        await PrincipalPage.open();
        const Spanish = await PrincipalPage.changeToSpanish;
        await Spanish.click();
        const spanishText = await $('h3=Desarrollador Full-Stack');
        await expect(spanishText).toExist();
        const English = await PrincipalPage.changeToEnglish;
        await English.click();
        const englishText = await $('h3=Full-Stack Developer');
        await expect(englishText).toExist();
    })
});
