import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "100wh",
      height: "60vh",
      padding: "10% 4% 5% 4%",
      margin: 0,
      overflowY: "auto",
      zIndex: -1
    },
    [theme.breakpoints.up("md")]: {
      width: "100wh",
      height: "70vh",
      padding: "5% 20% 5% 10%",
      margin: 0,
      overflowY: "auto",
      zIndex: -1
    }
  }
}));

export default function PrivacyPolicy() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">Privacy Policy</Typography>
      <Typography variant="subtitle2">
        Last updated: (October 19, 2019)
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        Legion Legal LLC ("us", "we", or "our") operates www.legalforall.org
        (the "Site"). This page informs you of our policies regarding the
        collection, use and disclosure of Personal Information we receive from
        users of the Site.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        We use your Personal Information for providing and improving the Site
        and its services. By using the Site and its services, you agree to the
        collection and use of information in accordance with this Privacy
        Policy. If you do not agree with any part of this Privacy Policy, then
        you should stop accessing the Site and its services immediately.
      </Typography>
      <Typography variant="h5">Information Collection and Use</Typography>
      <Typography paragraph={true} align={"justify"}>
        While using our Site, we may ask you to provide us with certain
        personally identifiable information (defined as information that could
        potentially identify you as an individual) that can be used to contact
        or identify you, which may include, but is not limited to your name,
        your email address, your zip code and your telephone contact number
        (collectively, “Personal Information”). We do not share any Personal
        Information with any third parties except to comply with the law,
        provide and enhance the services made available through the Site,
        improve the Site and/or protect our rights.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        Personal Information that is collected may be used for the purposes
        described elsewhere in this Privacy Policy and internally for our
        general commercial purposes, including, among other things, to offer our
        products and services and products and services of third parties that we
        think you might find of interest. Only Legion Legal LLC and our
        third-party service providers involved in distributing the offers or
        providing the products or services will have access to your PII. Our
        third-party service providers will only be permitted to use PII for that
        intended purpose.
      </Typography>
      <Typography variant="h5">How We Share Information</Typography>
      <Typography paragraph={true} align={"justify"}>
        We do not share your Personal Information with: (1) affiliated companies
        for their everyday business purposes or (2) any third parties so they
        can market to you.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        We may share your Personal Information with unaffiliated third parties:
        (1) if you request or authorize it; (2) if the information is provided
        to: (a) comply with applicable laws, rules, regulations, governmental
        and quasi-governmental requests, court orders, or subpoenas; (b) enforce
        our Terms of Use or other agreements; or (c) protect our rights,
        property, or safety or the rights, property, or safety of our users or
        others (e.g., to a consumer reporting agency for fraud protection,
        etc.); (3) if the disclosure is done as part of a purchase, transfer, or
        sale of services or assets (e.g., in the event that substantially all of
        our assets are acquired by another party, your Personal Information may
        be one of the transferred assets); (4) if the information is provided to
        our third-party service providers to perform functions on our behalf
        (e.g., analyzing data, providing marketing assistance, providing
        customer service, processing orders, etc.); (5) for our everyday
        business purposes; or (6) as permitted by applicable law or otherwise
        described in this Privacy Policy. When you are no longer our customer,
        we continue to share your information as described in this Privacy
        Policy.
      </Typography>
      <Typography variant="h5">Information You Share Socially</Typography>
      <Typography paragraph={true} align={"justify"}>
        Our Site may allow you to connect and share your actions, comments,
        content, and information publicly. We are not responsible for
        maintaining the confidentiality of any information you share publicly.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        Our Site may also allow you to connect with us on, share on, and use
        third-party websites, applications, and services. Please be mindful of
        your personal privacy needs and the privacy needs of others, as you
        choose whom to connect with and what to share and make public. We cannot
        control the privacy or security of information you choose to make public
        or share with others. We also do not control the privacy practices of
        third parties. Please contact those sites and services directly if you
        want to learn about their privacy practices.
      </Typography>
      <Typography variant="h5">Links to Third-Party Websites</Typography>
      <Typography paragraph={true} align={"justify"}>
        When you use our Site, you may be directed to other websites (such as
        Facebook and Twitter) that are beyond our control. We may also allow
        third-party websites or applications to link to our Services. We are not
        responsible for the privacy practices of any third parties or the
        content of linked websites, but we do encourage you to read the
        applicable privacy policies and terms and conditions of such parties and
        websites. This Privacy Policy only applies to our Services.
      </Typography>
      <Typography variant="h5">Log Data</Typography>
      <Typography paragraph={true} align={"justify"}>
        Like many site operators, we collect information that your browser sends
        whenever you visit our Site ("Log Data").
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        This Log Data may include information such as your computer's Internet
        Protocol ("IP") address, browser type, browser version, the pages of our
        Site that you visit, the time and date of your visit, the time spent on
        those pages and other statistics.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        In addition, we may use third party services such as Google Analytics
        that collect, monitor and analyze Log Data.
      </Typography>
      <Typography variant="h5">Communications</Typography>
      <Typography paragraph={true} align={"justify"}>
        We may use your Personal Information to contact you with newsletters,
        marketing or promotional materials and other information that may or may
        not advertise paid services.
      </Typography>
      <Typography variant="h5">Cookies</Typography>
      <Typography paragraph={true} align={"justify"}>
        Cookies are files with small amount of data, which may include an
        anonymous unique identifier. Cookies are sent to your browser from a web
        site and stored on your computer's hard drive.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        Like many sites, we use "cookies" to collect information. You can
        instruct your browser to refuse all cookies or to indicate when a cookie
        is being sent. However, if you do not accept cookies, you may not be
        able to use some portions of our Site.
      </Typography>

      <Typography variant="h5">Security</Typography>
      <Typography paragraph={true} align={"justify"}>
        The security of your Personal Information is important to us, but
        remember that no method of transmission over the Internet, or method of
        electronic storage, is 100% secure. While we strive to use commercially
        acceptable means to protect your Personal Information, we cannot
        guarantee its absolute security.
      </Typography>

      <Typography variant="h5">Changes to this Privacy Policy</Typography>
      <Typography paragraph={true} align={"justify"}>
        This Privacy Policy is effective as of (October 19, 2019) and will
        remain in effect except with respect to any changes in its provisions in
        the future, which will be in effect immediately after being posted on
        this page.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        We reserve the right to update or change our Privacy Policy at any time
        and you should check this Privacy Policy periodically. Your continued
        use of the Service after we post any modifications to the Privacy Policy
        on this page will constitute your acknowledgment of the modifications
        and your consent to abide and be bound by the modified Privacy Policy.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        If we make any material changes to this Privacy Policy, we will notify
        you either through the email address you have provided us, or by placing
        a prominent notice on our website.
      </Typography>

      <Typography variant="h5">Contact Us</Typography>
      <Typography paragraph={true} align={"justify"}>
        If you have any questions about this Privacy Policy, please contact us
        at legalforall2019@gmail.com.
      </Typography>
    </div>
  );
}
