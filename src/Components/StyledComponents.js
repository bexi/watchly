import React from "react";
import styled from "styled-components";

import {Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";

/* When this is used you need to send in the correct MUI theme */
const StyledLink = (styled(Link)`
          text-decoration: none;
          color: ${(props) => props.theme.palette.primary.main}
        `);

const PaperDiv = styled.div`
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background-color: ${(props) => (props.paperLight) ? props.theme.palette.background.paperLight: props.theme.palette.background.paper};
`;

const ScrollableDiv = styled.div`
    overflow: hidden;
    overflow-y: scroll; 
    position: relative; 
`;

const StyledInput = (styled(TextField)`
        width: 100%;
        margin-bottom: 2% !important;
`);

const CenterTextContainer = styled.div`
        color: white;
        text-align: center;
`;

export {StyledLink, PaperDiv, ScrollableDiv, StyledInput, CenterTextContainer};