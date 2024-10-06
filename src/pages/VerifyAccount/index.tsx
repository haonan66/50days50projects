import { useRef, useState } from 'react'
import './index.scss'

export default function VerifyAccount() {

    const inputRef = useRef<HTMLInputElement>(null);
    const [inputs, setInputs] = useState<number[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        const newInputs = [...inputs];
        newInputs[index] = +value;
        // 更新值
        setInputs(newInputs);
        // 获取所有的孩子节点
        const childrens = inputRef.current!.children;
        // 如果 index = 5 表示是最后一个输入框，此时需要将该输入框中的内容始终固定在 0 - 9 之间
        if (index === 5) {
            (childrens[5] as HTMLInputElement).value = value.split('')[value.length - 1];
        }
        if (value && index < 6) {
            // 聚焦下一个输入框
            (childrens[index + 1] as HTMLInputElement).focus();
        }

        // 为每个孩子绑定键盘监听事件，监听输入是否是后退键，如果是后退键，则清空当前输入框的内容。聚焦上一个输入框
        for (let i = 0; i < childrens.length; i++) {
            const child = childrens[i] as HTMLInputElement;
            child.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace') {
                    child.value = '';
                    (childrens[i - 1] as HTMLInputElement).focus();
                }
            });
        }
    };

    return (
        <div className='account-wrap'>
            <div className="box-wrap">
                <h2>Verify Your Account</h2>
                <p>
                    We emailed you the six digit code to cool_guy@email.com
                    Enter the code below to confirm your email address.
                </p>
                <div className="input-wrap" ref={inputRef}>
                    {
                        Array.from({ length: 6 }).map((_, index) => (
                            <input key={index} type="number" maxLength={1} max={9} min={0} placeholder="0" onChange={(e) => handleChange(e, index)} />
                        ))
                    }
                </div>
                <div className="bottom-wrap">
                    This is design only. We didn't actually send you an email as we don't have your email, right?
                </div>
            </div>
        </div>
    )
}
