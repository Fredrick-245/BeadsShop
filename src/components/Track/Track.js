import React from "react";
import styles from "./track.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import classes from "./timeline.module.css";
import "react-vertical-timeline-component/style.min.css";
import { BsDownload, BsSend,BsTelephoneForward } from "react-icons/bs";
import {GrWorkshop} from 'react-icons/gr'
import {GiForklift} from 'react-icons/gi'
import {VscWorkspaceTrusted} from 'react-icons/vsc'

export default function Track() {
  return (
    <div className={`${styles.container} center`}>
      <h1 className="text-[20px]">Track your order here</h1>
      <VerticalTimeline lineColor="var(--secondary-200)">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "var( --secondary-100)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid var( --secondary-100) ",
          }}
          date="2023 Apr 11,12:00"
          dateClassName={classes.date}
          iconStyle={{ background: "var( --secondary-100)", color: "#fff" }}
          icon={<BsDownload />}
        >
          <h3 className={`vertical-timeline-element-title ${classes.header}`}>
            Order Received
          </h3>
          <h4
            className={`vertical-timeline-element-subtitle ${classes.subHeader}`}
          >
            Nairobi, Kenya
          </h4>
          <p className={classes.par}>
            On 11th Aprill 2023 you order for the Indian bracelet was received
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "var( --secondary-100)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid var( --secondary-100) ",
          }}
          date="2023 Apr 12,12.00"
          dateClassName={classes.date}
          iconStyle={{ background: "var( --secondary-100)", color: "#fff" }}

          icon={<VscWorkspaceTrusted/>}
        >
          <h3 className={`vertical-timeline-element-title ${classes.header}`}>
            Working on the order
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Nirobi, Kenya</h4>
          <p className={classes.par}>
            As from 12:00 your order was being worked and finshed by our team
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 Apr 12,13:00"
          contentStyle={{ background: "var( --secondary-100)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid var( --secondary-100) ",
          }}
          dateClassName={classes.date}
          iconStyle={{ background: "var( --secondary-100)", color: "#fff" }}

          icon={<BsSend />}
        >
          <h3 className={`vertical-timeline-element-title ${classes.header}`}>
            Order dispatched
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Nairobi,Kenya</h4>
          <p className={classes.par}>
            As from 13:00,Apr 12,2023,your order was dispatched from our
            headquaters to our main dispersal point
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 Apr 12, 15:00"
          contentStyle={{ background: "var( --secondary-100)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid var( --secondary-100) ",
          }}
          dateClassName={classes.date}
          iconStyle={{ background: "var( --secondary-100)", color: "#fff" }}

          icon={<BsDownload />}

        >
          <h3 className={`vertical-timeline-element-title ${classes.header}`}>
            Order Received
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Nairobi,Kenya</h4>
          <p className={classes.par}>
            At 15:00, Apr 12,2023 you order arrived at Philadelphia house and
            was ready to be picked up
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 Apr 12,17:00"
          contentStyle={{ background: "var( --secondary-100)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid var( --secondary-100) ",
          }}
          dateClassName={classes.date}
          iconStyle={{ background: "var( --secondary-100)", color: "#fff" }}

          icon={<BsTelephoneForward />}
        >
          <h3 className={`vertical-timeline-element-title ${classes.header}`}>
            You were Contacted
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Nairobi,Kenya</h4>
          <p className={classes.par}>
            At 17:00,Apri 12,2023,we called you to come and pick your order
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 Apr 12,17:00"
          contentStyle={{ background: "var( --secondary-100)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid var( --secondary-100) ",
          }}
          dateClassName={classes.date}
          iconStyle={{ background: "var( --secondary-100)", color: "#fff" }}

          icon={<GiForklift/>}
        >
          <h3 className={`vertical-timeline-element-title ${classes.header}`}>
            Order Picked
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Nirobi,Kenya</h4>
          <p className={classes.par}>
            At 17:00,Apr 13 2023,You picked your order and you confirmed to us
            that it was you who really picked it
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
