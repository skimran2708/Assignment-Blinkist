import { Grid } from "@mui/material";
import FooterItem from "../../atoms/FooterItem";
import NavItem from "../NavItem";
import React from "react";

function NavSection() {
    return(
        <>
            <Grid container width='542px' height='224px' justifyContent='space-between'>
                <Grid item height='184px'>
                    <NavItem name="Editorial" icon={false} />
                    <FooterItem text="Book lists" />
                    <FooterItem text="What is Nonfiction?" />
                    <FooterItem text="What to read next?" />
                    <FooterItem text="Benefits of reading" />
                </Grid>
                <Grid item height='224px'>
                    <NavItem name="Useful Links" icon={false} />
                    <FooterItem text="Pricing" />
                    <FooterItem text="Blinkist business" />
                    <FooterItem text="Gift cards" />
                    <FooterItem text="Blinkist magaine" />
                    <FooterItem text="Contact & help" />
                </Grid>
                <Grid item height='184px' >
                    <NavItem name="Comapny" icon={false} />
                    <FooterItem text="About lists" />
                    <FooterItem text="Careers" />
                    <FooterItem text="Partners" />
                    <FooterItem text="Code of Conduct" /> 
                </Grid>
            </Grid>
        </>
    )
}

export default NavSection;