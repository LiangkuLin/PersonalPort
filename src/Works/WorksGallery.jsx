import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ImageComponet from "./ImageComponet";
import "./WorksGallery.css";

export default function WorksGallery() {
  const location = useLocation();
  const [imageURL, setimageURL] = useState("");
  const [imageElement, setImageElement] = useState("");
  const [firstDom, setFirstDom] = useState("");
  let counter = 0;

  let previousEvent = useRef(null);
  let previousUrl = useRef(null);

  useEffect(() => {
    setimageURL(location.state.work.image_urls.internal_image[0]);
  }, []);

  const chooseDisplayImage = (url, event) => {
    setimageURL(url);

    if (firstDom !== "") {
      firstDom.classList.remove("active");
    }

    if (previousEvent.current !== null) {
      previousEvent.current.target.classList.remove("active");
    }

    // add the class to new event

    event.target.classList.add("active");
    previousEvent.current = event;
    previousUrl.current = url;
  };

  const getDom = (FirstDOM) => {
    setFirstDom(FirstDOM);
  };

  return (
    <div>
      <ul className="inlineIcon">
        {location.state.work.image_urls.internal_image.map((eachImgUrl) => {
          if (counter == 0) {
            counter = counter + 1;
            return (
              <li
                key={eachImgUrl}
                className="active"
                ref={getDom}
                onClick={(e) => chooseDisplayImage(eachImgUrl, e)}
              ></li>
            );
          } else {
            counter = counter + 1;
            return (
              <li
                key={eachImgUrl}
                onClick={(e) => chooseDisplayImage(eachImgUrl, e)}
              ></li>
            );
          }
        })}
      </ul>
      <br />
      <TransitionGroup>
        <CSSTransition key={imageURL} timeout={1000} classNames="swap">
          <ImageComponet url={imageURL} />
        </CSSTransition>
      </TransitionGroup>

      {/* </Grid> */}
    </div>
  );
}
