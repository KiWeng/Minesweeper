import React from "react";
import logo from "./bomb.svg";
import Timer from "./Timer";
import {Button, Col, Row, Statistic} from 'antd';
import { LikeOutlined } from '@ant-design/icons';

class Panel extends React.Component {
  render() {
    return (
      <div style={{
        padding: '16',
      }}>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <div className="title">
              Minesweeper
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </Col>
          <Col span={12}>
            <Statistic
              title={<div style={{ color: 'white' }}>Mine counter</div>}
              value={this.props.flagCount}
              prefix={<LikeOutlined />}
              valueStyle={{ color: 'white' }}
            />
          </Col>
          <Col span={12}>
            <Timer
              isEnded={this.props.isEnded}
              doReset={this.props.doReset}
            />
          </Col>
          <Col span={24}>
              <Button type="primary" shape="round" size="large"
                      onClick={this.props.handleReset}
                      style={{ width: '100px' }}
              >
                Reset
              </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Panel
