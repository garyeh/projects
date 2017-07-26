import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({selectedPane: num});
  }

  render() {
    let pane = this.props.panes[this.state.selectedPane];

    return (
      <div>
        <label className="tabLabel">Tabs</label>
        <div className='tabs'>

          <div className='tab-content'>
            <article>
              {pane.content}
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
