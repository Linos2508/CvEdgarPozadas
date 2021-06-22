const Page = require('./page');

class PrincipalPage extends Page {
    get FacebookLink() { return $('#Facebook') }
    get githubLink() { return $('#github') }
    get linkedInLink() { return $('#linkedIn') }
    get cvPDFLink() { return $('#cvPDF') }
    get changeToSpanish() { return $('#Spanish') }
    get changeToEnglish() { return $('#English') }

    open() {
        return super.open('');
    }
}

module.exports = new PrincipalPage();
