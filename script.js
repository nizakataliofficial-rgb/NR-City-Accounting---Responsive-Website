const serviceDetails = {
    bookkeeping: {
        number: 'SERVICE 01', title: 'Bookkeeping',
        intro: 'Keep your financial records accurate, current and ready whenever you need a clear view of your business.',
        includes: ['Daily or weekly transaction recording', 'Bank and credit card reconciliation', 'Supplier and customer ledger updates', 'Monthly reports and bookkeeping review'],
        benefit: 'You always know what has been paid, what is owed and how the business is performing, without having to catch up on months of paperwork.'
    },
    accounts: {
        number: 'SERVICE 02', title: 'Accounts Preparation',
        intro: 'Annual accounts prepared clearly and correctly, so your business meets its filing obligations and you understand the numbers.',
        includes: ['Year-end accounts preparation', 'Companies House filing support', 'Profit and loss review', 'Balance sheet and year-end adjustments'],
        benefit: 'Accurate accounts give you confidence in your records and a reliable foundation for planning, funding and making better decisions.'
    },
    tax: {
        number: 'SERVICE 03', title: 'Company Tax Returns',
        intro: 'We calculate, review and file your corporation tax return carefully, with deadlines managed well ahead of time.',
        includes: ['Corporation tax calculation', 'Tax-efficient expense review', 'CT600 preparation and filing', 'HMRC correspondence support'],
        benefit: 'You reduce the risk of errors and missed deadlines while making sure your company pays the right amount of tax.'
    },
    'self-assessment': {
        number: 'SERVICE 04', title: 'Self Assessment',
        intro: 'A straightforward personal tax return service for directors, freelancers, landlords and other self-employed individuals.',
        includes: ['Income and expense review', 'Dividend and director income reporting', 'Tax return preparation and filing', 'Deadline and payment reminders'],
        benefit: 'Your return is completed properly and early, removing the uncertainty that often arrives with a last-minute tax deadline.'
    },
    vat: {
        number: 'SERVICE 05', title: 'VAT Returns',
        intro: 'Quarterly VAT returns reconciled against your books and submitted on time, with the figures checked before they reach HMRC.',
        includes: ['VAT records and transaction review', 'Quarterly VAT return preparation', 'Input and output VAT checks', 'Making Tax Digital support'],
        benefit: 'Regular checks help prevent surprises, protect your cash flow and keep your VAT reporting compliant.'
    },
    payroll: {
        number: 'SERVICE 06', title: 'Payroll',
        intro: 'Accurate, dependable payroll for your team, with payslips, pension contributions and reporting handled for you.',
        includes: ['Monthly or weekly payroll processing', 'Payslip and payroll report preparation', 'PAYE and pension submissions', 'Starter, leaver and payroll change support'],
        benefit: 'Your people are paid accurately and on time, while you get back the hours normally spent managing payroll administration.'
    }
};

const modal = document.querySelector('#service-modal');
const modalNumber = document.querySelector('#modal-number');
const modalTitle = document.querySelector('#modal-title');
const modalIntro = document.querySelector('#modal-intro');
const modalIncludes = document.querySelector('#modal-includes');
const modalBenefit = document.querySelector('#modal-benefit');
let lastTrigger;

function openService(service, trigger) {
    const details = serviceDetails[service];
    if (!details) return;
    lastTrigger = trigger;
    modalNumber.textContent = details.number;
    modalTitle.textContent = details.title;
    modalIntro.textContent = details.intro;
    modalBenefit.textContent = details.benefit;
    modalIncludes.replaceChildren(...details.includes.map(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        return listItem;
    }));
    modal.hidden = false;
    document.body.classList.add('modal-open');
    modal.querySelector('.modal-close').focus();
}

function closeService() {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    lastTrigger?.focus();
}

document.querySelectorAll('.service-more').forEach(button => {
    button.addEventListener('click', () => openService(button.dataset.service, button));
});
modal.addEventListener('click', event => {
    if (event.target.matches('[data-close-modal]')) closeService();
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.hidden) closeService();
});