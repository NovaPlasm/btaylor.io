import React, { Component } from 'react';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import ProjectContainer from '../components/ProjectContainer';
import btaylorImg from '../assets/projects/btaylor.io.jpg';
import raytracerImg from '../assets/projects/raytracer.jpg';
import buffaloImg from '../assets/projects/buffalo.jpg';
import loxleyImg from '../assets/projects/loxley.jpg';
import flightsimImg from '../assets/projects/flightsim.jpg';
import skiclubImg from '../assets/projects/skiclub.jpg';

class Projects extends Component {

  render() {
    return (
      <Layout>
        <Carousel looping>
          <ProjectContainer src={btaylorImg} title='btaylor.io' tags={['JavaScript', 'React']}>
            The website that I use to host my digital resume and various projects.  The website is written using React, and hosted on an AWS Lightsail instance.
          </ProjectContainer>
          <ProjectContainer src={raytracerImg} title='Raytracing Engine' tags={['C++']}>
            A raytracing engine built from the ground-up in C++.  A group final project which supports rendered gifs of the scene, various simple shapes, and multiple materials (matte, cosine, simple colors).  Also supports multiple and variable light sources (point, area, cone).
          </ProjectContainer>
          <ProjectContainer src={''} title='wrk' tags={['JavaScript', 'React Native', 'GraphQL']}>
            A minimalist homework planning app built using React Native.  I use GraphQL and an AWS Dymo instance to store user information.  When adding new work, the app uses previous analytics to estimate which class you are entering for, the type of work, and the time it will take to finish the work.  If desired, the app can also make an optimized schedule.  In development.
          </ProjectContainer>
          <ProjectContainer src={skiclubImg} title='5C Ski and Snowboard Club Website' tags={['JavaScript', 'React', 'GraphQL']}>
            Informational website for the 5C Ski and Snowboard Club. Uses headless Wordpress as a content manager to allow club leaders to easily change information. Supports user accounts, trip creation, and custom profiles noting allergies, car space, etc. In development.
          </ProjectContainer>
          <ProjectContainer src={buffaloImg} title='Buffalo' tags={['JavaScript']}>
            A continuous-deployment service meant to remove the hassle and paywall associated with typical continuous-deployment services.  Buffalo runs on your host server, and syncs with the designated git <code>master</code> branch in order to keep your server updated whenever there is commit.  As the service is open-source, compact, and ran on your own machine, there is minimal lagtime and resources used.
          </ProjectContainer>
          <ProjectContainer src={loxleyImg} title='Loxley' tags={['JavaScript', 'Big Data']}>
            Loxley is a simple algorithmic trading software written in JavaScript and hosted on an AWS Lightsail instance.  This allows bidirectional communication with the algorithm and the chosen input (default is Slack).  The algorithm in use is one tested to have over 2,000% gains in 10 years.
          </ProjectContainer>
          <ProjectContainer src={flightsimImg} title='Flight Simulator' tags={['JavaScript', 'WebGL']}>
            A simple flight simulator made using WebGL.  Featuring an infinite world and random world, the simulator allows you to move around by controlling the speed, yaw, pitch and roll of the aircraft.
          </ProjectContainer>
          <ProjectContainer src='' title='AR Card Game' tags={[]}>
            A card- and turn-based RPG. When played, your cards become animated on your smart device.  As Networking and Game Design Lead, I was responsible for creating the main game engine as well as the communication between the smart devices.
          </ProjectContainer>
          <ProjectContainer src='' title='Northstar' tags={[]}>
            A handheld device that when activated will dictate the names of all recognizable objects in its field of view. Image Recognition was conducted via a remote Flask server running with TensorFlow.
          </ProjectContainer>
        </Carousel>
      </Layout>
    );
  }
}

export default Projects;