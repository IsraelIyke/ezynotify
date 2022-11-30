import ScrollButton from "../components/ScrollButton";
import _app from "./_app";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Nav from "../components/nav";
import Head from "next/head";

export default function Terms() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Nav />
        </Grid>
        <Grid item xs={12} md={12}>
          <h3 style={{ marginTop: "6rem", padding: "1rem" }}>
            Terms and Conditions
          </h3>
          <h4 style={{ padding: "1rem" }}>Welcome to ezynotify!</h4>
          <div style={{ padding: "1rem" }}>
            These terms and conditions outline the rules and regulations for the
            use of ezynotify&apos;s Website, located at
            https://ezynotify.pages.dev. By accessing this website, we assume
            you accept these terms and conditions. Do not continue to use
            ezynotify if you do not agree to take all of the terms and
            conditions stated on this page.
            {/* Cookies:
The website uses cookies to help personalize your online experience. By accessing ezynotify, you agreed to use the required cookies.

A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.

We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work. Please keep in mind that by accepting required Cookies, you also accept third-party Cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website. */}
            <h3>License:</h3>
            Unless otherwise stated, ezynotify and/or its licensors own the
            intellectual property rights for all material on ezynotify. All
            intellectual property rights are reserved. You may access this from
            ezynotify for your own personal use subjected to restrictions set in
            these terms and conditions.
            <br />
            <br />
            You must not:
            <br />
            <br />
            Copy or republish material from ezynotify
            <br />
            Sell, rent, or sub-license material from ezynotify
            <br />
            Reproduce, duplicate or copy material from ezynotify
            <br />
            Redistribute content from ezynotify
            <br />
            This Agreement shall begin on the date hereof.
            <br />
            <br />
            <br />
            Parts of this website offer users an opportunity to post texts and
            websites in certain areas of the website. To the extent permitted by
            applicable laws, ezynotify shall not be liable for the texts,
            websites or any liability, damages, or expenses caused and/or
            suffered as a result of any use of and/or posting of and/or
            appearance of the texts on this website.
            <br />
            <br />
            <h3 id="refund">Refund Policy:</h3>
            Payment can be refunded to customer within 7 days of payment. After
            this 7 days, refund won&apos;t be possible.
            <br />
            <br />
            <h3 id="hyper">Hyperlinking to our Content:</h3>
            <br />
            The following organizations may link to our Website without prior
            written approval:
            <br />
            <br />
            Government agencies;
            <br />
            Search engines;
            <br />
            News organizations;
            <br />
            Online directory distributors may link to our Website in the same
            manner as they hyperlink to the Websites of other listed businesses;
            and
            <br />
            System-wide Accredited Businesses except soliciting non-profit
            organizations, charity shopping malls, and charity fundraising
            groups which may not hyperlink to our Web site.
            <br />
            These organizations may link to our home page, to publications, or
            to other Website information so long as the link: (a) is not in any
            way deceptive; (b) does not falsely imply sponsorship, endorsement,
            or approval of the linking party and its products and/or services;
            and (c) fits within the context of the linking party&apos;s site.
            <br />
            <br />
            We may consider and approve other link requests from the following
            types of organizations:
            <br />
            <br />
            commonly-known consumer and/or business information sources;
            <br />
            dot.com community sites;
            <br />
            associations or other groups representing charities;
            <br />
            online directory distributors;
            <br />
            internet portals;
            <br />
            accounting, law, and consulting firms; and
            <br />
            educational institutions and trade associations.
            <br />
            We will approve link requests from these organizations if we decide
            that: (a) the link would not make us look unfavorably to ourselves
            or to our accredited businesses; (b) the organization does not have
            any negative records with us; (c) the benefit to us from the
            visibility of the hyperlink compensates the absence of ezynotify;
            and (d) the link is in the context of general resource information.
            <br />
            <br />
            These organizations may link to our home page so long as the link:
            (a) is not in any way deceptive; (b) does not falsely imply
            sponsorship, endorsement, or approval of the linking party and its
            products or services; and (c) fits within the context of the linking
            party&apos;s site.
            <br />
            <br />
            If you are one of the organizations listed in paragraph 2 above and
            are interested in linking to our website, you must inform us by
            sending an e-mail to ezynotify. Please include your name, your
            organization name, contact information as well as the URL of your
            site, a list of any URLs from which you intend to link to our
            Website, and a list of the URLs on our site to which you would like
            to link. Wait 2-3 weeks for a response.
            <br />
            <br />
            Approved organizations may hyperlink to our Website as follows:
            <br />
            <br />
            By use of our corporate name; or
            <br />
            By use of the uniform resource locator being linked to; or
            <br />
            Using any other description of our Website being linked to that
            makes sense within the context and format of content on the linking
            party&apos;s site.
            <br />
            No use of ezynotify&apos;s logo or other artwork will be allowed for
            linking absent a trademark license agreement.
            <br />
            <br />
            <h3>Content Liability:</h3>
            <br />
            We shall not be held responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that are raised on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene, or criminal,
            or which infringes, otherwise violates, or advocates the
            infringement or other violation of, any third party rights.
            <br />
            <br />
            <h3>Reservation of Rights:</h3>
            <br />
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amend these terms and conditions and its linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
            <br />
            <br />
            <h3>Removal of links from our website:</h3>
            <br />
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us at any moment. We will
            consider requests to remove links, but we are not obligated to or so
            or to respond to you directly.
            <br />
            <br />
            We do not ensure that the information on this website is correct. We
            do not warrant its completeness or accuracy, nor do we promise to
            ensure that the website remains available or that the material on
            the website is kept up to date.
            <br />
            <br />
            <h3 id="disclaim">Disclaimer:</h3>
            <br />
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties, and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
            <br />
            <br />
            limit or exclude our or your liability for death or personal injury;
            <br />
            limit or exclude our or your liability for fraud or fraudulent
            misrepresentation;
            <br />
            limit any of our or your liabilities in any way that is not
            permitted under applicable law; or
            <br />
            exclude any of our or your liabilities that may not be excluded
            under applicable law.
            <br />
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: <br />
            (a) are subject to the preceding paragraph; and (b) govern all
            liabilities arising under the disclaimer, including liabilities
            arising in contract, in tort, and for breach of statutory duty.
            <br />
            <br />
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </div>
        </Grid>
        <ScrollButton />
      </Grid>
    </Box>
  );
}
