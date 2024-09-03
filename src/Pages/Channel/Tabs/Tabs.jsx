// import React, { useState, useEffect } from 'react';

// const Tabs = ({ children }) => {
//     console.log("children", children);
//     const [activeTab, setActiveTab] = useState(children[0].props.label);
//     const buttons = React.Children.map(children, (child) => child.props.label);
//     let content;

//     useEffect(() => {
//         React.Children.forEach(children, (child) => {
//             if (child.props.label === activeTab) content = child.props.children;
//         });
//     }, [activeTab, children]);

//     useEffect(() => {
//         console.log('content', content);
//     },[content])

//     return (
//         <div>
//             <TabButtons activeTab={activeTab} buttons={buttons} changeTab={setActiveTab} />
//             <div className="tab-content">{content }</div>
//         </div>
//     );
// };

// const TabButtons = ({ buttons, changeTab, activeTab }) => {
//     return (
//         <div className="tab-buttons">
//             {buttons.map((button) => (
//                 <button
//                     key={button}
//                     className={button === activeTab ? 'active' : 'text-[#aaa]'}
//                     onClick={() => changeTab(button)}
//                 >
//                     <span>{button}</span>
//                 </button>
//             ))}
//         </div>
//     );
// };

// export { Tabs, Tab };
// const Tab = ({ label, children }) => {
//     return <div label={label}>{children}</div>;
// };




import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children?.[0]?.props?.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div>
      <div className='tab-buttons'>
        {children.map(child => (
          <button
            key={child?.props?.label}
            className={`${
              activeTab === child?.props?.label ? 'active tabButton border-b-2 border-purple-500' : ''
            } flex-1 text-[#aaa] font-medium tabButton py-2`}
            onClick={e => handleClick(e, child?.props?.label)}
          >
            {child?.props?.label}
          </button>
        ))}
      </div>
      <div className="py-2">
        {children.map(child => {
          if (child?.props?.label === activeTab) {
            return <div key={child?.props?.label}>{child?.props?.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };