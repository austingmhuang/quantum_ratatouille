# Disclaimer
This project is a proof of concept and work in progress.

# Quantum Ratatouille
Much like the rat in the hat, you are the real quantum chef, pulling the strings behind the scenes. 
It's time to cook.

# Overview
Quantum Ratatouille allows you to build quantum computing workflows without any coding knowledge whatsoever. Build and customize your workflow with pre-built nodes such as QPE/QSVT and run them on Pennylane or any device that is supported (currently only default.qubit is supported 😄).

For example, one workflow involving QSVT may look something like this:
![Screenshot 2024-06-28 at 11 21 45 AM](https://github.com/austingmhuang/quantum_ratatouille/assets/65315367/459d54b5-a46d-421f-bc7d-67ec781a0570)

where you can clearly see that you can easily adjust your desired epsilon value, device, or input matrix.

For quantum chemistry, you might have something like this:
![Screenshot 2024-06-28 at 11 23 27 AM](https://github.com/austingmhuang/quantum_ratatouille/assets/65315367/cb3a78e8-53f0-499a-9c52-546f46f85ece)

where you can easily adjust your basis set, mapping, and measurement without any coding on your end. You can also imagine instantiating your own Hamiltonian node and linking that up instead.

# How to get started
The project is separated into the frontend and the backend, cd into each respective directory and read the READMEs there to install the necessary dependencies and run the project.
