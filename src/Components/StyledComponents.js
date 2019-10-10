import styled from "styled-components";
import {Link} from "react-router-dom";
import {useTheme} from "@material-ui/styles";

/* When this is used you need to send in the correct MUI theme */
const StyledLink = (styled(Link)`
          text-decoration: none;
          color: ${(props) => props.theme.palette.primary.main}
        `);

const PaperDiv = styled.div`
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.palette.background.paper};
`;

export {StyledLink, PaperDiv};