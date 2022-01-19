import React from "react";
import { Grid } from "@mui/material";
import ExploreItem from "../ExploreItem";
import entrepreneurshipIcon from "../../../../assets/icons/EntrepreneurshipIcon.png";
import scienceIcon from "../../../../assets/icons/ScienceIcon.png";
import economicsIcon from "../../../../assets/icons/EconomicsIcon.png";
import corporateIcon from "../../../../assets/icons/CorporateIcon.png";
import psychologyIcon from "../../../../assets/icons/PsychologyIcon.png";
import natureIcon from "../../../../assets/icons/NatureIcon.png";
import politicsIcon from "../../../../assets/icons/PoliticsIcon.png";
import healthIcon from "../../../../assets/icons/HealthIcon.png";
import historyIcon from "../../../../assets/icons/HistoryIcon.png";
import motivationIcon from "../../../../assets/icons/MotivationIcon.png";
import productivityIcon from "../../../../assets/icons/ProductivityIcon.png";
import careerIcon from "../../../../assets/icons/CareerIcon.png";
import marketingIcon from "../../../../assets/icons/MarketingIcon.png";
import personalIcon from "../../../../assets/icons/PersonalIcon.png";
import communicationIcon from "../../../../assets/icons/CommunicationIcon.png";
import moneyIcon from "../../../../assets/icons/MoneyIcon.png";
import relationshipIcon from "../../../../assets/icons/RelationshipIcon.png";
import educationIcon from "../../../../assets/icons/EducationIcon.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../../App"

const ExploreList = ({open}:any) => {

    let navigator = useNavigate();
    const clicked = useContext(UserContext)

    if(open!=="1") return null

    return(
        <>
        <Grid container width='942px' height='264px'>
            <ExploreItem iconName={entrepreneurshipIcon} categoryName="Entrepreneurship" onClick={()=>{navigator("entrepreneurship"); clicked()}}/>
            <ExploreItem iconName={politicsIcon} categoryName="Politics" />
            <ExploreItem iconName={marketingIcon} categoryName="Marketing & Sales" />
            <ExploreItem iconName={scienceIcon} categoryName="Science" />  
            <ExploreItem iconName={healthIcon} categoryName="Health & Nutrition" />
            <ExploreItem iconName={personalIcon} categoryName="Personal Development" />
            <ExploreItem iconName={economicsIcon} categoryName="Economics" />
            <ExploreItem iconName={historyIcon} categoryName="History" />
            <ExploreItem iconName={communicationIcon} categoryName="Communication Skills" />
            <ExploreItem iconName={corporateIcon} categoryName="Corporate Culture" />
            <ExploreItem iconName={motivationIcon} categoryName="Motivation & Inspiration" />
            <ExploreItem iconName={moneyIcon} categoryName="Money & Investments" />
            <ExploreItem iconName={psychologyIcon} categoryName="Psychology" />
            <ExploreItem iconName={productivityIcon} categoryName="Productivity" />
            <ExploreItem iconName={relationshipIcon} categoryName="Sex & Relationship" />
            <ExploreItem iconName={natureIcon} categoryName="Nature & Environment" />
            <ExploreItem iconName={careerIcon} categoryName="Career & Success" />
            <ExploreItem iconName={educationIcon} categoryName="Education" />
        </Grid>
        </>
    )
}

export default ExploreList;