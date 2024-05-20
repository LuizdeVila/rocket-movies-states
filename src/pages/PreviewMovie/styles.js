import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Preview = styled.div`
  margin: 50px 300px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  line-height: 1.6;
  gap: 15px;
  text-align: justify;

  h4 {
    color: red;
  }

  p:nth-child(1) {
    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .author {
    display: flex;
    align-items: center;

    > p {
      padding: 10px;
    }

    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`

export const PreviewTags = styled.div`
  overflow-y: auto;

  > h4 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: inline-block;
    margin: 15px 10px;
    padding: 5px 15px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`