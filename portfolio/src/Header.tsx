import TypingEffectWithCursor from './effects/TypingEffectWithCursor'

export default function Header(){
    const text: string = 'Hello, I am Michal Gabrys';

    return(
        <header>
            <h1>
                <TypingEffectWithCursor text={text} />
            </h1>
        </header>
    );
}