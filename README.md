# Height Map Visualizer Project Overview

This project is a 3D visualization tool that transforms 2D height maps into interactive 3D surfaces using WebGL and Three.js. It allows users to see textured surfaces with depth based on grayscale height maps.

## Features

- **3D Height Map Rendering**: Converts grayscale height maps into 3D surface meshes
- **Texture Mapping**: Applies albedo textures to the 3D surface
- **Interactive Controls**:
  - Adjustable depth parameter to control height intensity (0-100)
  - Toggle between color texture and grayscale height map views
  - Selectable texture examples (currently "Road" and "Stone")
- **Orbit Controls**: Rotate, pan, and zoom the 3D model for different viewing angles
- **Custom GLSL Shaders**: Uses vertex and fragment shaders for real-time surface deformation

## Technical Implementation

The application uses:
- Three.js for 3D rendering
- Custom GLSL shaders for height map displacement
- OrbitControls for camera manipulation
- lil-gui for the interactive user interface

## Usage

The interface provides several controls:
- Use the dropdown to switch between different texture examples
- Toggle between color texture view and height map view
- Adjust the depth slider to control the intensity of the height displacement
- Use keyboard shortcut 'g' to toggle between color and height map views
- Click and drag to rotate the model, scroll to zoom

## Project Structure

- `index.html`: Main HTML file with shader code and page structure
- `main.js`: JavaScript implementation handling 3D rendering and interactivity
- `source/`: Directory containing texture and height map images
  - Includes albedo (color) textures and corresponding height maps

## Requirements

The application runs in modern browsers with WebGL support and uses:
- Three.js (loaded via CDN)
- OrbitControls module
- lil-gui for the user interface
