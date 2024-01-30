import { Card, Col, Divider, Row, Select } from "antd";
import React from "react";
 import useTimetable from "../hooks/useTimetable";

const Timetable = () => {
   const { loading, classes } = useTimetable();
  console.log(classes);
  return (
    <div>
      <h1>TimeTable</h1>
      <Divider></Divider>
      <Select
        size="middle"
        options={classes.map(sinf => ({ value: sinf.id, label: sinf.name }))}
        placeholder="Sinf tanlang"
        loading={loading}
      />
      <br /><br />
      <div style={{height: 20}}></div>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Timetable;
