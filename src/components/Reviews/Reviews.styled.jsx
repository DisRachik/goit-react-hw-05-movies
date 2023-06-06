import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  margin-top: ${props => props.theme.spacing(5)};
`;
export const ReviewItem = styled.li`
  padding: ${props => props.theme.spacing(2)};
  border-bottom: 1px solid ${props => props.theme.colors.red};
`;
