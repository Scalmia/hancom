import {useState} from 'react';
import './practice.css'

const LikeButton = () => {
    const [liked, setliked] = useState("hello");

    return (
        <>
        <p>알림 {liked}</p>
        <p>좋아요 {liked}개</p>
        <button onClick={() => setliked(liked + 1)}>❤️ {liked}</button>
        <p>총 {liked.length}개</p>
        </>
    )
}

export default LikeButton;

const Hello = () => {
    return (
        <div className="hello">
            <h1>Hello Component</h1>
            <p>Hello!</p>
        </div>
    )
}

export { Hello }

const Greeting = ({ name }) => {
    return (
        <h1>Hello, {name}!</h1>
    );
};

export { Greeting };

const Profile = ({ name2, job = "Unknown" }) => {
    return (
        <div>
            <h2>{name2}</h2>
            <p>Job: {job}</p>
        </div>
    );
};

export { Profile }; 

const Card = ({ title='제목', content='내용', emoji='😊' }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>{emoji}</p>
        </div>
    );
};

export { Card };

const Avatar = ({ name, online }) => {
    return (
        <p>
            👌 {name}
            {online && <span className="dot">🟢</span>}
        </p>
    )
};

export { Avatar };

const Badge = ({ text, type }) => {
    const color = type === 'primary' ? 'blue' : 'gray';
    return (
        <span className="badge" style={{ backgroundColor: color }}>
            {text}
        </span>
    );
};

export { Badge };

const Alert = ({ type, text }) => {
    const map = {
        success: { icon: '✅', color: 'green' },
        error:   { icon: '❌', color: 'crimson' },
        warning: { icon: '⚠️', color: 'orange' },
    };
    const cfg = map[type]
    return <p style={{ color: cfg.color }}>{cfg.icon} {text}</p>
};

export { Alert };

const Rating = ({ score=0 }) => {
    return(
    <div>
        {[...Array(5)].map((_, i) => (
            <span key={i}>{i < score ? '★' : '☆'}</span>
        ))}
    </div>
    );
};

export { Rating };

const Tag = ({ tags }) => {
    return (
        <div>
            {tags.map((tag) => (
                <span key={tag}>{'#' + tag}</span>
            ))}
        </div>
    );
};

export { Tag };
