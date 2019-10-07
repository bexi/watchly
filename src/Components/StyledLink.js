import styled from "styled-components";
import {Link} from "react-router-dom";

/* When this is used you need to send in the correct MUI theme */
const StyledLink = styled(Link)`
          text-decoration: none;
          color: ${(props) => props.theme.palette.primary.main}
        `;
export default StyledLink;