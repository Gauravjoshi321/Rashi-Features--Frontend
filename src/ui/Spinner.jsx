import styled from "styled-components"

const Spinner = styled.div`
  margin: 22rem auto;

  width: 6.4rem;
  height: 6.4rem;
  border: 0.7rem solid rgba(0, 0, 0, 0.1);
  border-top: 0.7rem solid var(--color-brand-600);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); } 
 }
`

export default Spinner;