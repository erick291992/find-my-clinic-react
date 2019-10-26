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

export default function Termsofservice() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">Terms of Use ("Terms")</Typography>
      <Typography variant="subtitle2">
        Last updated: (October 19, 2019)
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        Please read these Terms of Use ("Terms", "Terms of Use") as well as
        terms laid out in our Privacy Policy carefully before using the
        www.legalforall.org website (the "Service" or “Legalforall” or the
        “Site”) operated by Legion Legal LLC ("us", "we", or "our").
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        Your access to and use of the Service is conditioned on your acceptance
        of and compliance with these Terms as well as with all applicable local,
        state, and federal laws and regulations. These Terms apply to all
        visitors, users and others who access or use the Service.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        By accessing or using the Service you agree to be bound by these Terms.
        If you disagree with any part of the terms then you may not access the
        Service.
      </Typography>

      <Typography variant="h5">Overview</Typography>
      <Typography paragraph={true} align={"justify"}>
        Legalforall is a website that shows where free legal assistance can be
        found in New York City. To show this information, Legalforall uses a map
        that displays relevant information for each location that users can
        visit to access free legal assistance.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        The information contained on Legalforall does not constitute legal
        advice and is not guaranteed to be correct, complete, or up-to-date. If
        you require legal advice for your specific problem, you should consult a
        licensed attorney in your area.
      </Typography>

      <Typography variant="h5">Third-Party Services and Content</Typography>
      <Typography paragraph={true} align={"justify"}>
        Our Service may contain links to third-party web sites or services that
        are not owned or controlled by Legion Legal LLC or Legalforall. We
        utilize links to connect users to Google Maps and may show users
        relevant advertisements as determined by Google Adsense.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        Legion Legal LLC has no control over, and assumes no responsibility for,
        the content, privacy policies, or practices of any third-party web sites
        or services. You further acknowledge and agree that Legion Legal LLC
        shall not be responsible or liable, directly or indirectly, for any
        damage or loss caused or alleged to be caused by or in connection with
        use of or reliance on any such content, goods or services available on
        or through any such web sites or services.
      </Typography>

      <Typography variant="h5">Your Use of Our Services</Typography>
      <Typography paragraph={true} align={"justify"}>
        We grant you a limited, personal, non-commercial, non-exclusive,
        non-transferable, non-assignable, and revocable license to use
        Legalforall. When using our services, we ask that you:
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        Don’t Try to Harm Our System. You agree not to distribute any virus,
        worm, Trojan horse, or other harmful computer code through Legalforall.
        You also agree to not take any action that may impose an unreasonable or
        disproportionately large load on our, or any of our Third-party
        Services’, infrastructure.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        Don’t Attempt to Circumvent Our Security. You agree not to bypass,
        circumvent, or attempt to bypass or circumvent any measures we may use
        to prevent or restrict access to Legalforall, including without
        limitation other accounts, computer systems, or networks connected to
        Legalforall.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        Don’t Steal From Us. You agree not to “crawl,” “scrape,” “spider,”
        decipher, decompile, disassemble, reverse engineer, or otherwise attempt
        to derive any source code, data, or underlying ideas or algorithms of
        any part of Legalforall.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        Don’t Copy From Us. You agree not to copy, imitate, mirror, reproduce,
        distribute, publish, download, display, perform, post, store, or
        transmit any of Legalforall’s Content, including without limitation any
        marks, in any form or by any means, including but not limited to
        electronic, mechanical, photocopying, recording, or otherwise.
      </Typography>

      <Typography variant="h5">
        Limitation of Liability & Disclaimer of Warranties
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        You understand and agree that we have no control over, and no duty to
        take any action regarding: • what content you access via our Services; •
        what effect the content may have on you; • how you may interpret or use
        the content; or • what actions you may take as a result of your exposure
        to the content. You release us from all liability related to you
        acquiring or not acquiring content through Legalforall. Legalforall may
        contain, or direct you to websites containing, information that some
        people may find offensive or inappropriate. We make no representations
        concerning any such content contained in or accessed through our Site,
        and we will not be responsible or liable for the accuracy, copyright
        compliance, legality, or decency of material contained in or accessed
        through Legalforall. Your interactions with organizations and/or
        individuals found on or through Legalforall, including membership
        payment or services, and any other terms, conditions, warranties, or
        representations associated with such dealings, are solely between you
        and such organizations and/or individuals.
      </Typography>

      <Typography variant="h5">Warranty & Limitation of Liability</Typography>
      <Typography variant="h5">Limitation of Liability</Typography>
      <Typography paragraph={true} align={"justify"}>
        TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL WE
        OR ANY OF OUR OFFICERS, DIRECTORS, REPRESENTATIVES, AGENTS, SERVANTS,
        COUNSEL, EMPLOYEES, CONSULTANTS, LAWYERS, AND OTHER PERSONNEL AUTHORIZED
        TO ACT, ACTING, OR PURPORTING TO ACT ON OUR BEHALF (COLLECTIVELY THE
        “LEGION LEGAL PARTIES”) BE LIABLE TO YOU UNDER CONTRACT, TORT, STRICT
        LIABILITY, NEGLIGENCE, OR ANY OTHER LEGAL OR EQUITABLE THEORY, FOR: (A)
        ANY LOST PROFITS, DATA LOSS, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR
        SERVICES, OR DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE,
        COMPENSATORY, OR CONSEQUENTIAL DAMAGES (INCLUDING ATTORNEYS' FEES AND
        ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT
        TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS
        INSTITUTED) OF ANY KIND WHATSOEVER RESULTING FROM: (I) YOUR ACCESS TO,
        USE OF, OR RELIANCE ON ANY CONTENT, MATERIALS, TEMPLATES, AGREEMENTS AND
        FORMS PROVIDED THROUGH THE SITE OR ANY ERRORS OR OMISSIONS IN ANY
        CONTENT, MATERIALS, TEMPLATES, AGREEMENTS, AND FORMS; (II) ANY
        UNAUTHORIZED ACCESS TO OR USE OF THE SITE OR LEGALFORALL’S SECURE
        SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
        INFORMATION STORED THEREIN; (III) ANY INTERRUPTION OR CESSATION OF
        TRANSMISSION TO OR FROM THE SITE; OR (IV) ANY BUGS, VIRUSES, TROJAN
        HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH OUR SITE BY
        ANY THIRD-PARTY (REGARDLESS OF THE SOURCE OF ORIGINATION), OR (B) ANY
        DIRECT DAMAGES IN EXCESS OF (IN THE AGGREGATE) OF THE GREATER OF: (I)
        FEES PAID TO US FOR THE APPLICABLE PRODUCTS; OR (II) $100.00.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        THESE LIMITATIONS APPLY REGARDLESS OF LEGAL THEORY, WHETHER BASED ON
        TORT, STRICT LIABILITY, BREACH OF CONTRACT, BREACH OF WARRANTY, OR ANY
        OTHER LEGAL THEORY, AND WHETHER OR NOT WE WERE ADVISED OF THE
        POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE
        EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL
        DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
      </Typography>

      <Typography variant="h5">Warranty Disclaimer</Typography>
      <Typography paragraph={true} align={"justify"}>
        LEGALFORALL AND ALL MATERIALS, DOCUMENTS OR FORMS PROVIDED ON OR THROUGH
        YOUR USE OF THE SITE OR SERVICES ARE PROVIDED ON AN "AS-IS" AND
        “AS-AVAILABLE” BASIS WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT
        PERMITTED BY LAW, WE DISCLAIM ALL REPRESENTATIONS AND WARRANTIES OF ANY
        KIND, WHETHER EXPRESS OR IMPLIED, RELATING TO THE SITE OR ANY CONTENT ON
        THE SITE, WHETHER PROVIDED OR OWNED BY US OR BY ANY THIRD-PARTY,
        INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR
        A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, FREEDOM FROM COMPUTER
        VIRUS, AND ANY IMPLIED WARRANTIES ARISING FROM COURSE OF DEALING, COURSE
        OF PERFORMANCE, OR USAGE IN TRADE, ALL OF WHICH ARE EXPRESSLY
        DISCLAIMED. IN ADDITION, WE DO NOT REPRESENT OR WARRANT THAT THE
        CONTENT, MATERIALS AND FORMS ACCESSIBLE VIA THE SITE ARE ACCURATE,
        COMPLETE, AVAILABLE, CURRENT, FREE OF VIRUSES OR OTHER HARMFUL
        COMPONENTS, OR THAT THE RESULTS OF USING THE SITE WILL MEET YOUR
        REQUIREMENTS. OBTAINING ANY FORMS OR MATERIALS THROUGH THE USE OF THE
        SITE OR SERVICES IS DONE AT YOUR OWN DISCRETION AND AT YOUR OWN RISK.
        LEGION LEGAL LLC SHALL HAVE NO RESPONSIBILITY FOR ANY DAMAGE TO YOUR
        COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY
        CONTENT, MATERIALS, INFORMATION OR SOFTWARE.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        SOME STATES DO NOT ALLOW THE DISCLAIMER OF IMPLIED WARRANTIES, SO THE
        FOREGOING DISCLAIMERS MAY NOT APPLY TO YOU. THIS PARAGRAPH GIVES YOU
        SPECIFIC LEGAL RIGHTS AND YOU MAY ALSO HAVE OTHER LEGAL RIGHTS THAT VARY
        FROM STATE TO STATE.
      </Typography>

      <Typography variant="h5">Indemnification</Typography>
      <Typography paragraph={true} align={"justify"}>
        To the extent permitted by applicable law, you agree to defend,
        indemnify, and hold harmless the Legion Legal LLC Parties from and
        against any and all claims, damages, obligations, losses, liabilities,
        costs or debt, and expenses (including but not limited to attorneys’
        fees) arising from: (i) your use of and access to the Site; (ii) any
        User Content you post, program, upload, use, distribute, store, or
        otherwise transmit through the Site; (iii) your violation of any term of
        this Agreement; or, (iv) your violation of any law, rule, or regulation,
        or the rights of any third-party.
      </Typography>

      <Typography variant="h5">Time Limitation on Claims</Typography>
      <Typography paragraph={true} align={"justify"}>
        You agree that any claim you may have arising out of or related to your
        relationship with us must be filed within one (1) year after such claim
        arose where, for purposes of this section, the time that the injury or
        harm occurred – not when it was discovered thereafter – is where it
        arose; otherwise, your claim is permanently barred.
      </Typography>

      <Typography variant="h5">Governing Law</Typography>
      <Typography paragraph={true} align={"justify"}>
        No matter where you’re located, the laws of the State of New York will
        govern these Terms and the parties’ relationship as if you signed these
        Terms in New York, without regard to New York state’s conflicts of laws
        rules. If any provisions of these Terms are inconsistent with any
        applicable law, those provisions will be superseded or modified only to
        the extent such provisions are inconsistent. The parties agree to submit
        to the federal or state courts in New York County, New York for
        exclusive jurisdiction of any dispute arising out of or related to your
        use of the Services or your breach of these Terms. You waive any
        objection based on lack of personal jurisdiction, place of residence,
        improper venue, or forum non conveniens in any such action.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        Our failure to enforce any right or provision of these Terms will not be
        considered a waiver of those rights. If any provision of these Terms is
        held to be invalid or unenforceable by a court, the remaining provisions
        of these Terms will remain in effect.
      </Typography>

      <Typography variant="h5">Termination</Typography>
      <Typography paragraph={true} align={"justify"}>
        We may terminate or suspend access to our Service immediately, without
        prior notice or liability, for any reason whatsoever, including without
        limitation if you breach the Terms.
      </Typography>
      <Typography paragraph={true} align={"justify"}>
        All provisions of the Terms which by their nature should survive
        termination shall survive termination, including, without limitation,
        ownership provisions, warranty disclaimers, indemnity and limitations of
        liability.
      </Typography>

      <Typography variant="h5">No Waiver</Typography>
      <Typography paragraph={true} align={"justify"}>
        Our failure to exercise, or delay in exercising, any right, power, or
        privilege under this Agreement shall not operate as a waiver; nor shall
        any single or partial exercise of any right, power, or privilege
        preclude any other or further exercise thereof.
      </Typography>

      <Typography variant="h5">Severability</Typography>
      <Typography paragraph={true} align={"justify"}>
        If it turns out that any term or provision of this Agreement is invalid,
        void, or, for any reason, unenforceable, such term or provision will be
        deemed severable and limited or eliminated to the minimum extent
        necessary. The limitation or elimination of the term or provision will
        not affect any other terms of this Agreement.
      </Typography>

      <Typography variant="h5">Arbitration & Waiver of Class Action</Typography>
      <Typography paragraph={true} align={"justify"}>
        The parties agree to arbitrate any dispute arising from this Agreement
        or your use of the Site on an individual basis. ARBITRATION PREVENTS YOU
        FROM SUING IN COURT OR FROM HAVING A JURY TRIAL. THE PARTIES HEREBY
        EXPRESSLY WAIVE TRIAL BY JURY. The parties agree that: (i) any
        arbitration will occur in New York, NY; and, (ii) the arbitration will
        be conducted confidentially by a single arbitrator in accordance with
        the rules of American Arbitration Association for arbitration of
        consumer-related disputes, in the English language, and with limited
        discovery. At your request, hearings may be conducted in person or by
        telephone and the arbitrator may provide for submitting and determining
        motions on briefs, without oral hearings. Other than class procedures
        and remedies discussed below, the arbitrator has the authority to grant
        any remedy that would otherwise be available to a court or other
        tribunal. THE PREVAILING PARTY IN ANY ACTION OR PROCEEDING TO ENFORCE
        THESE TERMS SHALL BE ENTITLED TO COSTS AND ATTORNEYS' FEES. THE ARBITRAL
        DECISION MAY BE ENFORCED IN ANY COURT. WHETHER THE DISPUTE IS HEARD IN
        ARBITRATION OR IN COURT, YOU AND LEGION LEGAL LLC WILL NOT COMMENCE
        AGAINST THE OTHER A CLASS ACTION, CLASS ARBITRATION, OR REPRESENTATIVE
        ACTION OR PROCEEDING.
      </Typography>

      <Typography variant="h5">Force Majeure</Typography>
      <Typography paragraph={true} align={"justify"}>
        We shall not be held liable for any delays, failure in performance, or
        interruptions of service which result directly or indirectly from any
        cause or condition beyond our reasonable control, including but not
        limited to: any delay or failure due to any act of God, act of civil or
        military authorities, act of terrorism, civil disturbance, war, strike
        or other labor dispute, fire, interruption in telecommunications or
        Internet services or network provider services, failure of equipment
        and/or software, other catastrophe, or any other occurrence which is
        beyond our reasonable control and shall not affect the validity and
        enforceability of any remaining provisions.
      </Typography>

      <Typography variant="h5">Assignment</Typography>
      <Typography paragraph={true} align={"justify"}>
        You agree that we may assign any of our rights and/or transfer,
        subcontract, or delegate any of our obligations under these Terms. Your
        agreement to these Terms is personal to you and you may not transfer or
        assign it to any third-party.
      </Typography>

      <Typography variant="h5">Entire Agreement</Typography>
      <Typography paragraph={true} align={"justify"}>
        This Agreement sets forth the entire understanding and agreement as to
        the subject matter hereof and supersedes any and all prior discussions,
        agreements, and understandings of any kind (including without limitation
        any prior versions of this Agreement) and every nature between us.
      </Typography>

      <Typography variant="h5">Changes</Typography>
      <Typography paragraph={true} align={"justify"}>
        We reserve the right, at our sole discretion, to modify or replace these
        Terms at any time. If a revision is material, we will try to provide at
        least 30 days' notice prior to any new terms taking effect. What
        constitutes a material change will be determined at our sole discretion.
      </Typography>

      <Typography variant="h5">Contact Us</Typography>
      <Typography paragraph={true} align={"justify"}>
        If you have any questions about these Terms, please contact us at
        legalforall2019@gmail.com.
      </Typography>
    </div>
  );
}
