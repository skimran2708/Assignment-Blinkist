import { Grid } from "@mui/material";
import NavItem from "../../atoms/NavItem";
import React from "react";

function NavSection() {
    return(
        <>
            <Grid container width='542px' height='224px' justifyContent='space-between'>
                <Grid item height='184px'>
                    <NavItem text="Editorial" type="bold" />
                    <NavItem text="Book lists" type="normal" />
                    <NavItem text="What is Nonfiction?" type="normal" />
                    <NavItem text="What to read next?" type="normal" />
                    <NavItem text="Benefits of reading" type="normal" />
                </Grid>
                <Grid item height='224px'>
                    <NavItem text="Useful Links" type="bold" />
                    <NavItem text="Pricing" type="normal" />
                    <NavItem text="Blinkist business" type="normal" />
                    <NavItem text="Gift cards" type="normal" />
                    <NavItem text="Blinkist magaine" type="normal" />
                    <NavItem text="Contact & help" type="normal" />
                </Grid>
                <Grid item height='184px' >
                    <NavItem text="Comapny" type="bold" />
                    <NavItem text="About lists" type="normal" />
                    <NavItem text="Careers" type="normal" />
                    <NavItem text="Partners" type="normal" />
                    <NavItem text="Code of Conduct" type="normal" /> 
                </Grid>
            </Grid>
        </>
    )
}

export default NavSection;