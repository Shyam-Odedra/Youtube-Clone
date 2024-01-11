import React, { useState, useEffect } from 'react';

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const buttons = React.Children.map(children, (child) => child.props.label);
    let content;

    useEffect(() => {
        React.Children.forEach(children, (child) => {
            if (child.props.label === activeTab) content = child.props.children;
        });
    }, [activeTab, children]);

    return (
        <div>
            <TabButtons activeTab={activeTab} buttons={buttons} changeTab={setActiveTab} />
            <div className="tab-content">{content}</div>
        </div>
    );
};

const TabButtons = ({ buttons, changeTab, activeTab }) => {
    return (
        <div className="tab-buttons">
            {buttons.map((button) => (
                <button
                    key={button}
                    className={button === activeTab ? 'active' : ''}
                    onClick={() => changeTab(button)}
                >
                    {button}
                </button>
            ))}
        </div>
    );
};

const Tab = ({ children }) => {
    return <React.Fragment>{children}</React.Fragment>;
};

export { Tabs, Tab };
