import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '.';
import searchIcon from '../../../assets/icons/SearchIcon.png';
import entrepreneurshipIcon from "../../../assets/icons/EntrepreneurshipIcon.png";
import scienceIcon from "../../../assets/icons/ScienceIcon.png";
import economicsIcon from "../../../assets/icons/EconomicsIcon.png";
import corporateIcon from "../../../assets/icons/CorporateIcon.png";
import psychologyIcon from "../../../assets/icons/PsychologyIcon.png";
import natureIcon from "../../../assets/icons/NatureIcon.png";
import politicsIcon from "../../../assets/icons/PoliticsIcon.png";
import healthIcon from "../../../assets/icons/HealthIcon.png";
import historyIcon from "../../../assets/icons/HistoryIcon.png";
import motivationIcon from "../../../assets/icons/MotivationIcon.png";
import productivityIcon from "../../../assets/icons/ProductivityIcon.png";
import careerIcon from "../../../assets/icons/CareerIcon.png";
import marketingIcon from "../../../assets/icons/MarketingIcon.png";
import personalIcon from "../../../assets/icons/PersonalIcon.png";
import communicationIcon from "../../../assets/icons/CommunicationIcon.png";
import moneyIcon from "../../../assets/icons/MoneyIcon.png";
import relationshipIcon from "../../../assets/icons/RelationshipIcon.png";
import educationIcon from "../../../assets/icons/EducationIcon.png";

export default {
    title: 'Atoms/Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const SearchIcon = Template.bind({});
SearchIcon.args = {
    name:searchIcon,
};

export const EntrepreneurshipIcon = Template.bind({});
EntrepreneurshipIcon.args = {
    name:entrepreneurshipIcon,
};

export const ScienceIcon = Template.bind({});
ScienceIcon.args = {
    name:scienceIcon,
};

export const EconomicsIcon = Template.bind({});
EconomicsIcon.args = {
    name:economicsIcon,
};

export const CorporateIcon = Template.bind({});
CorporateIcon.args = {
    name:corporateIcon,
};

export const PsychologyIcon = Template.bind({});
PsychologyIcon.args = {
    name:psychologyIcon,
};

export const NatureIcon = Template.bind({});
NatureIcon.args = {
    name:natureIcon,
};

export const PoliticsIcon = Template.bind({});
PoliticsIcon.args = {
    name:politicsIcon,
};

export const HealthIcon = Template.bind({});
HealthIcon.args = {
    name:healthIcon,
};

export const HistoryIcon = Template.bind({});
HistoryIcon.args = {
    name:historyIcon,
};

export const MotivationIcon = Template.bind({});
MotivationIcon.args = {
    name:motivationIcon,
};

export const ProductivityIcon = Template.bind({});
ProductivityIcon.args = {
    name:productivityIcon,
};

export const CareerIcon = Template.bind({});
CareerIcon.args = {
    name:careerIcon,
};

export const MarketingIcon = Template.bind({});
MarketingIcon.args = {
    name:marketingIcon,
};

export const PersonalIcon = Template.bind({});
PersonalIcon.args = {
    name:personalIcon,
};

export const CommunicationIcon = Template.bind({});
CommunicationIcon.args = {
    name:communicationIcon,
};

export const MoneyIcon = Template.bind({});
MoneyIcon.args = {
    name:moneyIcon,
};

export const RelationshipIcon = Template.bind({});
RelationshipIcon.args = {
    name:relationshipIcon,
};

export const EducationIcon = Template.bind({});
EducationIcon.args = {
    name:educationIcon,
};
