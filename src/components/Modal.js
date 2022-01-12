import React from 'react';

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div>
            {open ? (
                <section>
                    <header>
                        <button className="close" onClick={close}>
                            x
                        </button>
                    </header>
                    <div className="body">
                        Modal입니다.
                    </div>
                </section>
            ) : null}
        </div>
    );
};

export default Modal;