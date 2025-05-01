// BadComponent.tsx

const BadComponent = () => {
    return (
        <div onClick={() => alert('clicked')}>
            Click Me
            <img src="image.png"/>
            <label>Username</label>
            <input/>
            <a href="https://example.com">Example</a>
            <button/>
        </div>
    );
};

export default BadComponent;
