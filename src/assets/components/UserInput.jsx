import React from "react";
import { useState } from "react";

export default function UserInput({onChangeInput, userInputObject}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInputObject.initialInvestment}
            onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
            required
          />
        </p>
        <p>
          {/* how much money the user wants to invest every year */}
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInputObject.annualInvestment}
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={userInputObject.expectedReturn}
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            value={userInputObject.duration}
            onChange={(e) => onChangeInput("duration", e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
