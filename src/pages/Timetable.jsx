import { Card, Col, Divider, Row, Select } from "antd";
import React from "react";
import useTimetable from "../hooks/useTimetable";

const Timetable = () => {
  const { loading, classes } = useTimetable();
  return (
    <div>
      <h1>TimeTable</h1>
      <Divider></Divider>
      <Select
        size="middle"
        options={classes.map((sing) => ({ value: sing.id, label: sing.name }))}
        placeholder="Sinf tanlang"
        loading={loading}
      />
      <br /><br />
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
