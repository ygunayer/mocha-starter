pipeline {
    agent {
        docker { image 'node:8-alpine' }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Dependencies') {
            steps {
                sh 'npm install'
                sh 'chmod +x ./node_modules/nyc/bin/nyc.js'
                sh 'chmod +x ./node_modules/mocha/bin/_mocha'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
                sh 'npm run coverage'
                step([
                    $class: 'CloverPublisher',
                    cloverReportDir: 'coverage',
                    cloverReportFileName: 'clover.xml',
                    healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80], // optional, default is: method=70, conditional=80, statement=80
                    unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50], // optional, default is none
                    failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]     // optional, default is none
                ])
            }
        }
    }
}
