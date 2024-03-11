import React from "react";
import Column from "./column";
import ButtonGetStart from "./button-get-start";
import { content } from "../content/text";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" my-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b-2 py-24">
        <div>
          <Column gap={10} className="">
            <div className="font-medium text-lg">{`${content.domain}`}</div>
            <div>
              <ButtonGetStart />
            </div>
          </Column>
        </div>
        <div>
          <Column className="gap-5">
            <div className="text-lg font-medium">Information</div>
            <div>APR Rates</div>
          </Column>
        </div>
        <div>
          <Column className="gap-5">
            <div className="text-lg font-medium">Support</div>
            <div>FAQs</div>
            <div>Contact</div>
          </Column>
        </div>
        <div>
          <Column className="gap-5">
            <div className="text-lg font-medium">Legal</div>
            <div>Terms & Conditions</div>
            <div>Website Policy</div>
            <div>Lending Policy</div>
            <div>Fraud</div>
            <div>CCPA Notice</div>
            <div>Do Not Sell</div>
            <div>Privacy Policy</div>
            <div>E-Consent</div>
          </Column>
        </div>
      </div>

      <div>
        <Column className="gap-10 text-center w-full text-sm py-24">
          <div>
            {` 2021 ${content.domain}, United States of America – All Rights
            Reserved`}
          </div>
          <div>Footnotes:</div>
          <div>
            (*) Your funds could be sent to your account as soon as 15 minutes
            once you have been approved. Your bank’s policies and procedures
            will determine how long it takes for the funds to arrive in your
            account.
          </div>
          <div>{`(**) The offer process is completed in an average time of 3 minutes but can be completed within as little as 1 minute. You will receive a loan offer after submitting all required details if you’re approved.`}</div>
          <div>{`(***) Some of our providers offer rates as low as 5.99% APR but these rates are not available to every customer. Repayment terms can vary, are for closed end loan products and do not reflect the full range of products available throughout our network.`}</div>
          <div>{`Material Disclosure`}</div>
          <div>{`APR Disclosure. Annual Percentage Rate (APR) refers to the annual interest generated by a sum that is then charged to borrowers. APR is expressed as a percentage that represents the annual cost of borrowing over the term of the loan. This figure includes any fees or additional costs associated with the loan. The APR provides consumers with one bottom-line number they can compare with other loan offers, credit cards, or investment products. ${content.domain} cannot guarantee any APR as we are not a lender ourselves. An APR can generally run between 5.99% up to 35.99%. Loan products generally have a 61-day minimum repayment term and a 6 year maximum repayment term. When considering accepting a loan from a lender within the ${content.domain} network, please read any agreement docuemntation carefully as the APR and repayment terms may differ from what is listed on this site.`}</div>
          <div>{`Representative Examples of APR can be found in the Loan Information section of our homepage.`}</div>
          <div>{`Material Disclosure. The operator of this website is not a lender, loan broker or agent for any lender or loan broker. We are an advertising referral service to qualified participating lenders that may be able to provide amounts between $100 and $1,000 for cash advance loans, up to $5,000 for installment loans, and up to $35,000 for personal loans. Not all lenders can provide these amounts and there is no guarantee that you will be accepted by an independent, participating lender. This service does not constitute an offer or solicitation for loan products which are prohibited by any state law, and we do not predict or determine the interest rates and finance charges applied to any loan offered by lenders. This is not a solicitation for a particular loan and is not an offer to lend. We do not endorse or charge you for any service or product. Any compensation received is paid by participating lenders and only for advertising services provided. This service and offer are void where prohibited. We do not control and are not responsible for the actions of any lender. We do not have access to the full terms of your loan, including APR, which may vary based on your creditworthiness, state, and lender or lending partner. For details, questions or concerns regarding your loan please contact your lender directly. Only your lender can provide you with information about your specific loan terms, their current rates and charges, renewal, payments and the implications for non-payment or skipped payments. The registration information submitted by you on this website will be shared with one or more participating lenders. You are under no obligation to use our service to initiate contact with a lender, register for credit or any loan product, or accept a loan from a participating lender, but it is your responsibility to carefully review and accept the terms of any loan offer. Cash transfer times and repayment terms vary between lenders. Repayment terms may be regulated by state and local laws. Some faxing may be required. Be sure to review our FAQs for additional information on issues such as credit and late payment implications. These disclosures are provided to you for information purposes only and should not be considered legal advice. Use of this service is subject to this site’s Terms of Use and Privacy Policy.`}</div>
          <div>{`Service Role and Limitations. ${content.domain} acts solely as a referral service and is not a lender. We do not predict or determine the fees, interest rates, or other financial implications associated with any loans you may be offered by participating lenders. Our role is to connect you with our network of qualified lenders, and we do not participate in the decision-making process regarding loan approvals, terms, or conditions. It’s important for users to understand that our service involves no predictive assessment or guarantee of the loan terms you may receive.`}</div>
          <div>{`Exclusions. Residents of some states may not be eligible for some or all short-term, small-dollar loans. Residents of Arkansas, New York, New Hampshire, Vermont and West Virginia are not eligible to use this website or service. The states serviced by this website may change from time to time, without notice.`}</div>
          <div>{`Credit Implications. The operator of this website does not make any credit decisions. Independent, participating lenders that you might be connected with may perform credit checks with credit reporting bureaus or obtain consumer reports, typically through alternative providers to determine credit worthiness, credit standing and/or credit capacity. By submitting your information, you agree to allow participating lenders to verify your information and check your credit to assess your creditworthiness, credit standing, and credit capacity. By engaging with our service and submitting your information, you consent to allow these credit checks by potential lenders. It is important to understand that missing a payment or making a late payment on a loan can negatively impact your credit score. Loans provided by independent, participating lenders in our network are designed to provide cash to you to be repaid within a short amount of time. The short-term loans are not a solution for long-term debt and credit difficulties. Only borrow an amount that can be repaid on the date of your next pay period. Consider seeking professional advice regarding your financial needs, risks and alternatives to short-term loans. Late Payments of loans may result in additional fees or collection activities, or both. Each lender has their own terms and conditions, please review their policies for further information. Nonpayment of credit could result in collection activities.  Please note that ${content.domain} is not a lender and does not engage in debt collection. The collection practices of each lender in our network are provided in their respective loan agreement. Every lender has its own renewal policy, which may differ from lender to lender. Please review your lender’s renewal policy.`}</div>
          <div>{`${content.domain} is a trading name of DogStar Digital Corp. We are a referral service only and do not directly fund any credit product. Your request will be referred to a third-party lender who will contact you directly to ascertain if they can facilitate your requirements, as we do not directly fund any credit product. The third party will appraise you of their fees, charges and terms before you would enter any contract with them. We may receive a referral fee (amount not ascertainable) from the third party depending on the outcome of their dealings with you. It is recommended that you obtain independent legal and financial advice before taking up any products that you may be referred to and offered.`}</div>
          <div>{`Dogstar Digital Corp, company number 2397068. Address: 700 Maine Street, Suite 3, Bangor, ME, 04401`}</div>
        </Column>
      </div>
    </div>
  );
};

export default Footer;
