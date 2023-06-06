import styled from '@emotion/styled';

export const ActorGallery = styled.ul`
  margin-top: ${props => props.theme.spacing(5)};
  display: grid;
  max-width: calc(100vw - ${props => props.theme.spacing(12)});
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.theme.spacing(40)}, 1fr)
  );
  grid-gap: ${props => props.theme.spacing(4)};
  margin-left: auto;
  margin-right: auto;
`;

export const ActorCard = styled.li`
  padding-bottom: ${props => props.theme.spacing(2)};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};

  background-color: ${props => props.theme.colors.light};
  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.spacing(2)};
`;

export const ActorName = styled.h3`
  padding: 0 ${props => props.theme.spacing(1)};
  margin-top: auto;
  border-top: 1px solid ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.dark};
`;
export const ActorRole = styled.p`
  padding: 0 ${props => props.theme.spacing(1)};
  border-bottom: 1px solid ${props => props.theme.colors.red};
`;
