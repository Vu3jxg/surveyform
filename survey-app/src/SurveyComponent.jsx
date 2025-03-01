import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";

function SurveyComponent() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    survey.data = {
        "nps-score": 9,
        "promoter-features": [
            "performance",
            "ui"
        ]
    };
    return (<Survey model={survey} />);
}

export default SurveyComponent;