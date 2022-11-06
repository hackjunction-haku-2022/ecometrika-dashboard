import styled from '@emotion/styled'
import { injectGlobal } from '@emotion/css';
import { keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';

injectGlobal`
    #__next {
        scroll-snap-type: y mandatory;
        height: 100vh;
        overflow-y: scroll;
        font-family: "Fira Sans";
    }
`;

const appear = keyframes`
  0% {
    filter: brightness(0);
  }

  100% {
    filter: brightness(100%);
  }
`

const HeroWrapper = styled.div`
    display: flex;
    scroll-snap-align: start;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #000;
    color: #FFF;
    height: 100vh;
    background-image: url(/images/slide1.jpg);
    background-size: cover;
    animation: ${appear} 1s;
    font-size: 32px;
    font-weight: 600;

    & h1 {
        font-size: 72px;
    }
`;

const PresentWrapper = styled.div`
    display: flex;
    scroll-snap-align: start;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    background-size: cover;
    font-size: 64;
`;


const AnotherSlide = styled.div`
    scroll-snap-align: start;
    height: 100vh;
`;

function HeroSlide() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (value >= 418) {
            return;
        }

        setTimeout(() => {
            setValue(v => v + 1);
        }, 1)
    }, [value]);

    return (
        <HeroWrapper>
            <div>
                The average Internet user spends
                <h1>{value}</h1>
                minutes in the Internet per day
            </div>
        </HeroWrapper>
    )
}

export default function Promo() {
    return (
        <>
            <HeroSlide />
            <PresentWrapper>
                <div style={{maxWidth: '900px', margin: '0 auto'}}>
                    The modern era is about consuming information from the Internet and one problem that we process all information through our mind like a sieve. What we would get insights from our mind about the feelings that we have about our time in the Internet?
                </div>
            </PresentWrapper>
        </>
    );
}