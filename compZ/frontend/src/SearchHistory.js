import React, { Component } from "react";
import axios from "axios";

class SearchHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchHistory: [],
    };
  }

  async componentDidMount() {
    await axios
      .get(`https://compzbackend-bzedu2xpga-uc.a.run.app/api/searchhistory`)
      .then((res) => {
        this.setState({
          searchHistory: res.data,
        });
      })
      .catch((err) => {
        console.log("search history err", err);
        console.log("search history err", err.data);
      });
  }

  render() {
    return (
      <div>
        <div>
          <div className="col-12 col-sm-12 pt-4">
            <table className="table table-hover">
              <thead className="thead">
                <tr>
                  <th>Jobname</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {this.state.searchHistory.map((data) => {
                  return (
                    <tr key={Math.random()}>
                      <th>
                        <a href={`/login/${data.jobName}`}>{data.jobName}</a>
                      </th>
                      <td>{data.date}</td>
                      <td>{data.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchHistory;
