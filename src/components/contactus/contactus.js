import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Hésitez pas à me contacter par mail pour plus d'informations.
              </p>
              <hr/>
              <p className="lead">
              Déplacements en voiture possible
              </p>
            </div>
          </div>
        </section>
        );
  }
}
