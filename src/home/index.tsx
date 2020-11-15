import React, { useState } from "react";
import "./index.css";
import { Steps, Button, message } from "antd";

const { Step } = Steps;

const steps = [
  {
    title: "Products and Services",
    content: "Products and Services",
  },
  {
    title: "Customer Basic Details",
    content: "Customer Basic Details",
  },
  {
    title: "Verify Mobile/Email",
    content: "Verify Mobile/Email",
  },
  {
    title: "Take Photo",
    content: "Take Photo",
  },
  {
    title: "Signature",
    content: "Signature",
  },
  {
    title: "Regulatory Customer Information",
    content: "Regulatory Customer Information",
  },
  {
    title: "Sales and Marketing Information",
    content: "Sales and Marketing Information",
  },
  {
    title: "Account Information Details",
    content: "Account Information Details",
  },
  {
    title: "Review and Submit",
    content: "Review and Submit",
  },
];

const Wizard = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.content} title={item.title} />
        ))}
      </Steps>
      <div style={{ transform: "translateY(50px)" }} className="steps-content">
        {steps[current].content}
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
  // const [state, setState] = useState({
  //   sections: [
  //     "Products and Services",
  //     "Customer Basic Details",
  //     "Verify Mobile/Email",
  //     "Take Photo",
  //     "Signature",
  //     "Regulatory Customer Information",
  //     "Sales and Marketing Information",
  //     "Account Information Details",
  //     "Review and Submit",
  //   ],
  //   activeNo: 1,
  //   arrowLocation: 35,
  //   arrowTargetLocations: [35, 145, 255, 365, 480, 585, 695, 805, 920],
  // });
  // const onPrev = () => {
  //   let activeNo = state.activeNo;
  //   let arrowLocation = state.arrowLocation;
  //   if (activeNo > 1) {
  //     activeNo = activeNo - 1;
  //     arrowLocation = state.arrowTargetLocations[activeNo - 1];
  //   }
  //   setState((prevState) => ({ ...prevState, arrowLocation, activeNo }));
  // };
  // const onNext = () => {
  //   let activeNo = state.activeNo;
  //   let arrowLocation = state.arrowLocation;
  //   if (activeNo <= state.sections.length) {
  //     activeNo = activeNo + 1;
  //     arrowLocation = state.arrowTargetLocations[activeNo - 1];
  //   }
  //   setState((prevState) => ({ ...prevState, arrowLocation, activeNo }));
  // };
  // return (
  //   <>
  //     <div className="wizard">
  //       <div className="head">
  //         {state.sections.map((section, i) => {
  //           return (
  //             <section
  //               className={`${state.activeNo === i + 1 ? "active" : ""}`}
  //               key={i}
  //             >
  //               <span className="no">{i + 1}</span>
  //               <span className="text">{section}</span>
  //             </section>
  //           );
  //         })}
  //         <span
  //           className="arrow"
  //           style={{
  //             left: `${state.arrowLocation}px`,
  //             transition: "left .3s ease",
  //           }}
  //         ></span>
  //       </div>
  //     </div>
  //     <div>
  //       <button type="button" onClick={onPrev}>
  //         Previous
  //       </button>
  //       <button type="button" onClick={onNext}>
  //         Next
  //       </button>
  //     </div>
  //   </>
  // );
};

export default Wizard;
