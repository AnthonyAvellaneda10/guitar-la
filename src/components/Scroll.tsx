import useScrollUp from '../hooks/useScrollUp';

interface ScrollProps {
    showScrollButton: boolean;
}

function Scroll({ showScrollButton }: ScrollProps) {

    const { scrollToTop } = useScrollUp();

    return (
        <>
            <button id='scroll-up' className={`scrollup ${showScrollButton ? 'show-scroll' : ''}`} onClick={scrollToTop}>
                <i className="ri-arrow-up-line"></i>
            </button>

        </>
    );
}

export default Scroll