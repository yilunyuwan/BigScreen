import React from 'react';

export const Memorabilia: React.FC = () => {
  return (
    <div className="bordered 大事记 displayBlock">
      <h2>往年大事记</h2>
      <div className="chart">
        <table>
          <thead>
          <tr>
            <th>日期</th>
            <th>事件</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>2014.07.26</td>
            <td>加入 SNH48 三期生</td>
          </tr>
          <tr>
            <td>2014.09.05</td>
            <td>加入 SNH48 Team NII</td>
          </tr>
          <tr>
            <td>2017.10.28</td>
            <td>「CSM中国职业脱口秀大赛」评审团嘉宾</td>
          </tr>
          <tr>
            <td>2018.08.24</td>
            <td>「真相吧！花花世界」嘉宾</td>
          </tr>
          <tr>
            <td>2020.11.29</td>
            <td>任命 SNH48 Team NII 队长</td>
          </tr>
          <tr>
            <td>2022.01.16</td>
            <td>卸任 SNH48 Team NII 队长</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}