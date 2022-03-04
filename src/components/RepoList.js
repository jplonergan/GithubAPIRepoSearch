import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from '@salesforce/design-system-react';

function RepoList({ repos }) {
  return repos
    ? repos.map(({
      id, name, description, html_url, language, topics,
    }) => (
      <article key={id} className="slds-p-around_xx-small">
        <Card
          heading={name}
          icon={<Icon category="standard" name="document" size="small" />}
        >
          <article className="slds-tile slds-p-around_small">
            <div className="slds-grid slds-wrap">
              <div className="slds-col slds-size_6-of-6 slds-small-size_1-of-1 slds-medium-size_4-of-6 slds-large-size_3-of-6 slds-p-around_small">
                <h3 className="slds-tile__title slds-truncate" title="Salesforce UX">
                  <a href={html_url} target="_blank" rel="noreferrer">
                    View in Github
                  </a>
                </h3>
                <div className="slds-tile__detail">
                  <dl className="slds-list_horizontal slds-wrap">
                    <dt
                      className="slds-item_label slds-text-color_weak slds-truncate"
                      title="Name"
                    >
                      Language:
                    </dt>
                    <dd className="slds-item_detail slds-truncate" title="Name Text">
                      {language}
                    </dd>
                    <dt
                      className="slds-item_label slds-text-color_weak slds-truncate"
                      title="Description"
                    >
                      Description:
                    </dt>
                    <dd className="slds-item_detail " title="Description Text">
                      {description}
                    </dd>
                    <dt
                      className="slds-item_label slds-text-color_weak slds-truncate"
                      title="Topics"
                    >
                      Topics:
                    </dt>
                    <dd className="slds-item_detail slds-truncate" title="Topics Text">
                      {topics.map((topic) => ` ${topic}`)}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </article>
        </Card>
      </article>
    ))
    : null;
}

const mapStateToProps = (state) => ({
  repos: state.repos,
});

export default connect(mapStateToProps, null)(RepoList);
