import { Component } from "react";
import ExpAndEducFormularies from "./components/ExpAndEducFormularies";
import PersonalInformation from "./components/PersonalInformation";

class App extends Component {
  constructor() {
    super();

    this.state = {
      experiences: [0],
      countExperience: 1,
      educations: [0],
      countEducation: 1,
      formulary: true,
      display: false,
      mode: "Preview",
    };
  }

  onAddExperience = () => {
    this.setState({
      experiences: this.state.experiences.concat(this.state.countExperience),
      countExperience: this.state.countExperience + 1,
    });
  };

  onDeleteExperience = (num) => {
    this.setState({
      experiences: this.state.experiences.filter((i) => i !== num),
    });
  };

  onAddEducation = () => {
    this.setState({
      educations: this.state.educations.concat(this.state.countEducation),
      countEducation: this.state.countEducation + 1
    });
  };

  onDeleteEducation = (num) => {
    this.setState({
      educations: this.state.educations.filter((i) => i !== num),
    });
  };

  handlePreviewClick = () => {
    this.setState({
      formulary: this.state.formulary === true ? false : true,
      display: this.state.formulary !== true ? false : true,
      mode: this.state.mode === "Edit" ? "Preview" : "Edit",
    });
  };
  render() {
    return (
      <div>
        <PersonalInformation
          display={this.state.display}
          formulary={this.state.formulary}
        />
        <ExpAndEducFormularies
          experiences={this.state.experiences}
          onDeleteExperience={this.onDeleteExperience}
          onAddExperience={this.onAddExperience}
          educations={this.state.educations}
          onDeleteEducation={this.onDeleteEducation}
          onAddEducation={this.onAddEducation}
          display={this.state.display}
          formulary={this.state.formulary}
        />
        <div id="PreviewButtonCenter">
          <button onClick={this.handlePreviewClick} id="previewButton">
            {this.state.mode}
          </button>
        </div>
      </div>
    );
  }
}
export default App;
