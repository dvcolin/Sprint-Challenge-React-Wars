import styled from 'styled-components';
import { colors } from './Colors';
import {fonts } from './Fonts';

export const PersonName = styled.h2`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 0;
    font-family: ${fonts.mainFont};
`;

export const PersonHeight = styled.p`
    font-size: 1.4rem;
    color: ${colors.neon};
    font-family: ${fonts.secondaryFont};
`;
export const PersonMass = styled.p`
    font-size: 1.4rem;
    color: ${colors.lightBlue};
    font-family: ${fonts.secondaryFont};
`;
export const PersonGender = styled.p`
    font-size: 1.4rem;
    color: ${colors.lightYellow};
    font-family: ${fonts.secondaryFont};
    
`;
export const PersonBirthYear = styled.p`
    font-size: 1.4rem;
    color: ${colors.lightPurple};
    font-family: ${fonts.secondaryFont};
`;